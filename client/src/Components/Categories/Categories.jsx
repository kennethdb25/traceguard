import React, { useEffect, useState } from "react";
import "antd/dist/antd";
import "./categoery.css";
import {
  theme,
  Layout,
  Table,
  Button,
  Row,
  Col,
  Input,
  Form,
  Drawer,
  Space,
  Upload,
  message,
  DatePicker,
  TimePicker,
} from "antd";
import {
  PrinterOutlined,
  ImportOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  PlusOutlined,
  ThunderboltOutlined,
  SearchOutlined,
  DashOutlined,
  DownOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {
  CaseDetailsModal,
  FormDetailsModal,
  FormUpdateModal,
} from "../AntdComponents/modal";
const { Content } = Layout;
const format = "HH:mm";

const Categories = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [form] = Form.useForm();

  const [newCase, setNewCase] = useState(false);
  const [onViewForm, setOnViewForm] = useState(false);
  const [category, setCategory] = useState();
  const [categoryData, setCategoryData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [caseData, setCaseData] = useState(true);
  const [viewLDeatailsImg, setViewLDeatailsImg] = useState();
  const [viewADetailsModal, setViewADetailsModal] = useState(false);
  const [updateData, setUpdateData] = useState();
  const [viewUpdateForm, setViewUpdateForm] = useState(false);
  const history = useNavigate();

  const initialValues = {
    agencyAndAddress1: updateData?.agencyAndAddress1,
    agencyAndAddress2: updateData?.agencyAndAddress2,
    agencyAndAddress3: updateData?.agencyAndAddress3,
    agencyAndAddress4: updateData?.agencyAndAddress4,
    agencyAndAddress5: updateData?.agencyAndAddress5,
    agencyAndAddress6: updateData?.agencyAndAddress6,
    agencyAndAddress7: updateData?.agencyAndAddress7,
    continuation: updateData?.continuation,
    date1: updateData?.date1,
    date2: updateData?.date2,
    date3: updateData?.date3,
    date4: updateData?.date4,
    date5: updateData?.date5,
    date6: updateData?.date6,
    date7: updateData?.date7,
    date8: updateData?.date8,
    receivedBy1: updateData?.receivedBy1,
    receivedBy2: updateData?.receivedBy2,
    receivedBy3: updateData?.receivedBy3,
    remarks1: updateData?.remarks1,
    remarks2: updateData?.remarks2,
    remarks3: updateData?.remarks3,
    remarks4: updateData?.remarks4,
    remarks5: updateData?.remarks5,
    remarks6: updateData?.remarks6,
    remarks7: updateData?.remarks7,
    remarks8: updateData?.remarks8,
    remarks9: updateData?.remarks9,
    time1: updateData?.time1,
    time2: updateData?.time2,
    time3: updateData?.time3,
    time4: updateData?.time4,
    time5: updateData?.time5,
    time6: updateData?.time6,
    time7: updateData?.time7,
    time8: updateData?.time8,
    turnedOverBy1: updateData?.turnedOverBy1,
    turnedOverBy2: updateData?.turnedOverBy2,
    withdrawnRelease1: updateData?.withdrawnRelease1,
    withdrawnRelease2: updateData?.withdrawnRelease2,
    withdrawnRelease3: updateData?.withdrawnRelease3,
    withdrawnSlipNo: updateData?.withdrawnSlipNo,
  };

  const onViewFormDetails = async () => {
    setOnViewForm(true);
  };

  const onNewCase = () => {
    setNewCase(true);
  };

  const onCloseCase = () => {
    setNewCase(false);
    form.resetFields();
  };

  const onUpdateFormCase = async () => {
    setViewUpdateForm(true);
  };

  const onCloseUpdateFormCase = async () => {
    setViewUpdateForm(false);
    form.resetFields();
  };

  const onFinish = async (values) => {
    values.caseNumber = caseData.caseNumber;
    const data = await fetch(`/api/update-form/${caseData.caseNumber}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const res = await data.json();
    if (res.status === 201) {
      message.success("Form Updated Successfully");
      onCloseUpdateFormCase();
      setViewADetailsModal(false);
      form.resetFields();
      history("/home");
    }
  };

  const onFinishCase = async (values) => {
    const newData = new FormData();
    newData.append("photo", values.photo.file.originFileObj);
    newData.append("category", category);
    newData.append("caseNumber", values.caseNumber);
    newData.append("date", values.date.$d.toISOString());
    newData.append("itemNumber", values.itemNumber);
    newData.append("officer", values.officer);
    newData.append("place", values.place);
    newData.append("remarks", values.remarks);
    newData.append(
      "time",
      `${values.time.$d.getHours()}:${values.time.$d.getMinutes()}:${values.time.$d.getSeconds()}`
    );

    const res = await fetch("/api/add-case", {
      method: "POST",
      body: newData,
    });

    const data = await res.json();

    if (data.status === 201) {
      message.success("Added Successfully");
      getAllCases();
      onCloseCase();
      form.resetFields();
    } else {
      message.error(data.error);
    }
  };

  const getAllCases = async () => {
    const data = await fetch(`/api/get-cases?category=${category}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await data.json();
    setCategoryData(res.body);
  };

  const onViewCaseDetails = async (record, e) => {
    setCaseData(record);
    fetch(`/uploads/${record?.imgpath}`)
      .then((res) => res.blob())
      .then(
        (result) => {
          setViewLDeatailsImg(URL.createObjectURL(result));
        },
        (error) => {
          console.log(error);
        }
      );

    const data = await fetch(
      `/api/get-form-details?caseNumber=${record.caseNumber}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const res = await data.json();
    setUpdateData(res?.body);
    setViewADetailsModal(true);
  };

  const onCloseForm = async () => {
    setOnViewForm(false);
    form.resetFields();
  };

  useEffect(() => {
    setCategory(localStorage.getItem("categorySelect"));
    setTimeout(() => {
      getAllCases();
      setIsLoading(false);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const columns = [
    {
      title: "Case Number",
      dataIndex: "caseNumber",
      key: "caseNumber",
      width: "10%",
    },
    {
      title: "Item Number",
      dataIndex: "itemNumber",
      key: "itemNumber",
      width: "10%",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "10%",
      render: (record) => (
        <>
          <p>{`${new Date(record).getMonth() + 1}-${new Date(
            record
          ).getDate()}-${new Date(record).getFullYear()}`}</p>
        </>
      ),
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      width: "10%",
    },
    {
      title: "Place",
      dataIndex: "place",
      key: "place",
      width: "10%",
    },
    {
      title: "Remarks",
      dataIndex: "remarks",
      key: "remarks",
      width: "10%",
    },
    {
      title: "Officer/Tech",
      dataIndex: "officer",
      key: "officer",
      width: "10%",
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      width: "10%",
      render: (record) => (
        <>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <Button
              type="primary"
              icon={<ReadOutlined />}
              onClick={(e) => {
                onViewCaseDetails(record, e);
              }}
              style={{ backgroundColor: "blue", border: "1px solid #d9d9d9" }}
            >
              View Details
            </Button>
          </div>
        </>
      ),
    },
  ];

  const imgprops = {
    beforeUpload: (file) => {
      const isIMG = file.type.startsWith("image");

      if (!isIMG) {
        message.error(`${file.name} is not an image`);
      }

      return isIMG || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      console.log(info.fileList);
    },
  };

  const onPreview = async (file) => {
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const width = window.innerWidth;

  return (
    <div
      style={{
        background: colorBgContainer,
        minHeight: 280,
        padding: 24,
        backgroundColor: "rgba(19, 55, 95, 1)",
        height: "100vh",
        // borderRadius: borderRadiusLG,
      }}
    >
      <Content
        style={{
          padding: "24px 48px",
        }}
      >
        <div className="category-icons">
          <a href="/FORM.pdf" target="_blank" style={{ color: "black" }}>
            <PrinterOutlined className="category-icon" />
          </a>
          <ImportOutlined className="category-icon" />
          <ArrowLeftOutlined
            className="category-icon"
            onClick={() => history("/home")}
            style={{ cursor: "pointer" }}
          />
          <ArrowRightOutlined
            className="category-icon"
            onClick={() => history("/history")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="table-commands">
          <div className="left-commands">
            <div>
              <AppstoreOutlined /> Show All
            </div>
            <div>
              <CalendarOutlined /> Calendar
            </div>
            <div>
              <AppstoreOutlined /> Booked
            </div>
            <div>
              <PlusOutlined />
            </div>
          </div>
          <div className="right-commands">
            <div>Filter</div>
            <div>Sort</div>
            <div>
              <ThunderboltOutlined />
            </div>
            <div>
              <SearchOutlined />
            </div>
            <div>
              <DashOutlined />
            </div>
            <div>
              <Button type="primary" size="small" onClick={() => onNewCase()}>
                New <DownOutlined />
              </Button>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <Table
            key="caseData"
            columns={columns}
            dataSource={categoryData}
            loading={isLoading}
            // pagination={paginationStudentBorrowed}
          />
        </div>
      </Content>
      <CaseDetailsModal
        viewADetailsModal={viewADetailsModal}
        setViewADetailsModal={setViewADetailsModal}
        setCaseData={setCaseData}
        setViewLDeatailsImg={setViewLDeatailsImg}
        caseData={caseData}
        viewLDeatailsImg={viewLDeatailsImg}
        onViewFormDetails={onViewFormDetails}
      />
      {/* New Case Part */}
      <Drawer
        title="ADD NEW CASE"
        placement="left"
        onClose={() => onCloseCase()}
        open={newCase}
        height="100vh"
        width="50%"
        style={{ display: "flex", justifyContent: "center" }}
        extra={<Space></Space>}
        footer={[
          <div
            style={
              width >= 450
                ? { display: "flex", justifyContent: "flex-end", gap: "20px" }
                : { display: "flex", justifyContent: "flex-start", gap: "20px" }
            }
          >
            <Button type="primary" onClick={() => onCloseCase()}>
              CANCEL
            </Button>

            <Button type="primary" onClick={() => form.submit()}>
              CONFIRM CASE
            </Button>
          </div>,
        ]}
      >
        <Form
          form={form}
          labelCol={{
            span: 8,
          }}
          layout="horizontal"
          onFinish={onFinishCase}
          autoComplete="off"
          style={{
            width: "100%",
          }}
        >
          <Row>
            {/* <Col xs={{ span: 0 }} md={{ span: 4 }}></Col> */}
            <Col xs={{ span: 24 }} md={{ span: 24 }}>
              <Row gutter={12}>
                <Col xs={{ span: 24 }} md={{ span: 12 }} layout="vertical">
                  <Form.Item
                    label="Case Number"
                    name="caseNumber"
                    labelCol={{
                      span: 24,
                    }}
                    wrapperCol={{
                      span: 24,
                    }}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please input a case number!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter a case number" />
                  </Form.Item>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                  <Form.Item
                    label="Item Number"
                    name="itemNumber"
                    labelCol={{
                      span: 24,
                    }}
                    wrapperCol={{
                      span: 24,
                    }}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please input an item number!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter an item number" />
                  </Form.Item>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 24 }}>
                  <Form.Item
                    label="Place"
                    name="place"
                    labelCol={{
                      span: 24,
                    }}
                    wrapperCol={{
                      span: 24,
                    }}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please input a place!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter a place" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={12}>
                <Col xs={{ span: 24 }} md={{ span: 8 }}>
                  <Form.Item
                    label="Date"
                    name="date"
                    labelCol={{
                      span: 24,
                    }}
                    wrapperCol={{
                      span: 24,
                    }}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please input a date!",
                      },
                    ]}
                  >
                    <DatePicker
                      style={{
                        width: "100%",
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 8 }}>
                  <Form.Item
                    label="Time"
                    name="time"
                    labelCol={{
                      span: 24,
                    }}
                    wrapperCol={{
                      span: 24,
                    }}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please input a time!",
                      },
                    ]}
                  >
                    <TimePicker
                      format={format}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 8 }}>
                  <Form.Item
                    label="Remarks"
                    name="remarks"
                    labelCol={{
                      span: 24,
                      //offset: 2
                    }}
                    wrapperCol={{
                      span: 24,
                    }}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please enter a remarks!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter a remarks" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={12}>
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                  <Form.Item
                    label="Officer/Tech"
                    name="officer"
                    labelCol={{
                      span: 24,
                      //offset: 2
                    }}
                    wrapperCol={{
                      span: 24,
                    }}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please enter an officer/tech!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter an officer/tech" />
                  </Form.Item>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                  <Form.Item
                    label="Evidence Image"
                    name="photo"
                    labelCol={{
                      span: 24,
                      //offset: 2
                    }}
                    wrapperCol={{
                      span: 24,
                    }}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please upload an image",
                      },
                    ]}
                  >
                    <Upload
                      {...imgprops}
                      listType="picture-card"
                      maxCount={1}
                      onPreview={onPreview}
                    >
                      <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                      </div>
                    </Upload>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col xs={{ span: 0 }} md={{ span: 4 }}></Col>
          </Row>
        </Form>
      </Drawer>
      {/* Form part */}
      <FormDetailsModal
        onViewForm={onViewForm}
        onCloseForm={onCloseForm}
        updateData={updateData}
        onUpdateFormCase={onUpdateFormCase}
      />

      <FormUpdateModal
        viewUpdateForm={viewUpdateForm}
        onCloseUpdateFormCase={onCloseUpdateFormCase}
        form={form}
        initialValues={initialValues}
        onFinish={onFinish}
      />
    </div>
  );
};

export default Categories;
