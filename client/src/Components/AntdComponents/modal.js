import {
  Button,
  Modal,
  Typography,
  Row,
  Col,
  Input,
  Image,
  Popconfirm,
  Form,
} from "antd";
import {
  RollbackOutlined,
  PlusOutlined,
  ReadOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

export const FormUpdateModal = (props) => {
  const {
    viewUpdateForm,
    onCloseUpdateFormCase,
    form,
    initialValues,
    onFinish,
  } = props;
  return (
    <Modal
      key="CategoryUpdateForm"
      title="FORM UPDATE"
      width={1200}
      open={viewUpdateForm}
      onCancel={() => onCloseUpdateFormCase()}
      footer={[
        <Button
          onClick={() => onCloseUpdateFormCase()}
          icon={<RollbackOutlined />}
        >
          CANCEL
        </Button>,
        <Popconfirm
          placement="top"
          title="Proceed on updating case form?"
          onConfirm={() => form.submit()}
          okText="Proceed"
          cancelText="Cancel"
        >
          <Button type="primary" icon={<PlusOutlined />}>
            UPDATE
          </Button>
        </Popconfirm>,
      ]}
    >
      <Form
        form={form}
        labelCol={{
          span: 8,
        }}
        initialValues={initialValues}
        layout="horizontal"
        onFinish={onFinish}
        autoComplete="off"
        style={{
          width: "100%",
        }}
      >
        <Row>
          <Col xs={{ span: 24 }} md={{ span: 16 }}>
            <Row gutter={12} justify="end">
              <Col
                xs={{ span: 22, offset: 2 }}
                md={{ span: 22, offset: 2 }}
                layout="horizontal"
              >
                <Form.Item
                  label="REMARKS"
                  name="remarks1"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.remarks1 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>

              <Col xs={{ span: 24 }} md={{ span: 24 }} layout="horizontal">
                <Form.Item
                  label="Continuation of COC Form No."
                  name="continuation"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.continuation ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 24 }} layout="horizontal">
                <Form.Item
                  label="WITHDRAWN/RELEASE BY"
                  name="withdrawnRelease1"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.withdrawnRelease1 ? true : false}
                    placeholder="Name and Designation"
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 8 }} layout="vertical">
                <Form.Item
                  label="WITHDRAWN SLIP NO."
                  name="withdrawnSlipNo"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.withdrawnSlipNo ? true : false}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 8 }} layout="vertical">
                <Form.Item
                  label="DATE"
                  name="date1"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.date1 ? true : false}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 8 }} layout="vertical">
                <Form.Item
                  label="TIME"
                  name="time1"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.time1 ? true : false}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 22, offset: 2 }}
                md={{ span: 22, offset: 2 }}
                layout="horizontal"
              >
                <Form.Item
                  label="REMARKS"
                  name="remarks2"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.remarks2 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 24 }} layout="horizontal">
                <Form.Item
                  label="RECEIVED BY"
                  name="receivedBy1"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.receivedBy1 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 22, offset: 2 }}
                md={{ span: 22, offset: 2 }}
                layout="horizontal"
              >
                <Form.Item
                  label="AGENCY & ADDRESS"
                  name="agencyAndAddress1"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.agencyAndAddress1 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 11, offset: 2 }}
                md={{ span: 11, offset: 2 }}
                layout="vertical"
              >
                <Form.Item
                  label="DATE"
                  name="date2"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.date2 ? true : false}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 11 }} md={{ span: 11 }} layout="vertical">
                <Form.Item
                  label="TIME"
                  name="time2"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.time2 ? true : false}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 22, offset: 2 }}
                md={{ span: 22, offset: 2 }}
                layout="horizontal"
              >
                <Form.Item
                  label="REMARKS"
                  name="remarks3"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.time2 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 24 }} layout="horizontal">
                <Form.Item
                  label="TURNED OVER BY"
                  name="turnedOverBy1"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.turnedOverBy1 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 22, offset: 2 }}
                md={{ span: 22, offset: 2 }}
                layout="horizontal"
              >
                <Form.Item
                  label="AGENCY & ADDRESS"
                  name="agencyAndAddress2"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.agencyAndAddress2 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 11, offset: 2 }}
                md={{ span: 11, offset: 2 }}
                layout="vertical"
              >
                <Form.Item
                  label="DATE"
                  name="date3"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.date3 ? true : false}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 11 }} md={{ span: 11 }} layout="vertical">
                <Form.Item
                  label="TIME"
                  name="time3"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.time3 ? true : false}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 22, offset: 2 }}
                md={{ span: 22, offset: 2 }}
                layout="horizontal"
              >
                <Form.Item
                  label="REMARKS"
                  name="remarks4"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.remarks4 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 24 }} layout="horizontal">
                <Form.Item
                  label="RECEIVED BY"
                  name="receivedBy2"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.receivedBy2 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 22, offset: 2 }}
                md={{ span: 22, offset: 2 }}
                layout="horizontal"
              >
                <Form.Item
                  label="AGENCY & ADDRESS"
                  name="agencyAndAddress3"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.agencyAndAddress3 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 11, offset: 2 }}
                md={{ span: 11, offset: 2 }}
                layout="vertical"
              >
                <Form.Item
                  label="DATE"
                  name="date4"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.date4 ? true : false}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 11 }} md={{ span: 11 }} layout="vertical">
                <Form.Item
                  label="TIME"
                  name="time4"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.time4 ? true : false}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 22, offset: 2 }}
                md={{ span: 22, offset: 2 }}
                layout="horizontal"
              >
                <Form.Item
                  label="REMARKS"
                  name="remarks5"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.remarks5 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 24 }} layout="horizontal">
                <Form.Item
                  label="WITHDRAWN/RELEASE BY"
                  name="withdrawnRelease2"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.withdrawnRelease2 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 22, offset: 2 }}
                md={{ span: 22, offset: 2 }}
                layout="horizontal"
              >
                <Form.Item
                  label="AGENCY & ADDRESS"
                  name="agencyAndAddress4"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.agencyAndAddress4 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 11, offset: 2 }}
                md={{ span: 11, offset: 2 }}
                layout="vertical"
              >
                <Form.Item
                  label="DATE"
                  name="date5"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.date5 ? true : false}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 11 }} md={{ span: 11 }} layout="vertical">
                <Form.Item
                  label="TIME"
                  name="time5"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.time5 ? true : false}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 22, offset: 2 }}
                md={{ span: 22, offset: 2 }}
                layout="horizontal"
              >
                <Form.Item
                  label="REMARKS"
                  name="remarks6"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.remarks6 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 24 }} layout="horizontal">
                <Form.Item
                  label="RECEIVED BY"
                  name="receivedBy3"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.receivedBy3 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 22, offset: 2 }}
                md={{ span: 22, offset: 2 }}
                layout="horizontal"
              >
                <Form.Item
                  label="AGENCY & ADDRESS"
                  name="agencyAndAddress5"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.agencyAndAddress5 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 11, offset: 2 }}
                md={{ span: 11, offset: 2 }}
                layout="vertical"
              >
                <Form.Item
                  label="DATE"
                  name="date6"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.date6 ? true : false}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 11 }} md={{ span: 11 }} layout="vertical">
                <Form.Item
                  label="TIME"
                  name="time6"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.time6 ? true : false}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 22, offset: 2 }}
                md={{ span: 22, offset: 2 }}
                layout="horizontal"
              >
                <Form.Item
                  label="REMARKS"
                  name="remarks7"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.remarks7 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 24 }} layout="horizontal">
                <Form.Item
                  label="TURNED OVER BY"
                  name="turnedOverBy2"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.turnedOverBy2 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 22, offset: 2 }}
                md={{ span: 22, offset: 2 }}
                layout="horizontal"
              >
                <Form.Item
                  label="AGENCY & ADDRESS"
                  name="agencyAndAddress6"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.agencyAndAddress6 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 11, offset: 2 }}
                md={{ span: 11, offset: 2 }}
                layout="vertical"
              >
                <Form.Item
                  label="DATE"
                  name="date7"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.date7 ? true : false}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 11 }} md={{ span: 11 }} layout="vertical">
                <Form.Item
                  label="TIME"
                  name="time7"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.time7 ? true : false}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 22, offset: 2 }}
                md={{ span: 22, offset: 2 }}
                layout="horizontal"
              >
                <Form.Item
                  label="REMARKS"
                  name="remarks8"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.remarks8 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 24 }} layout="horizontal">
                <Form.Item
                  label="WITHDRAWN/RELEASE BY"
                  name="withdrawnRelease3"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.withdrawnRelease3 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 22, offset: 2 }}
                md={{ span: 22, offset: 2 }}
                layout="horizontal"
              >
                <Form.Item
                  label="AGENCY & ADDRESS"
                  name="agencyAndAddress7"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.agencyAndAddress7 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 11, offset: 2 }}
                md={{ span: 11, offset: 2 }}
                layout="vertical"
              >
                <Form.Item
                  label="DATE"
                  name="date8"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.date8 ? true : false}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 11 }} md={{ span: 11 }} layout="vertical">
                <Form.Item
                  label="TIME"
                  name="time8"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.time8 ? true : false}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 22, offset: 2 }}
                md={{ span: 22, offset: 2 }}
                layout="horizontal"
              >
                <Form.Item
                  label="REMARKS"
                  name="remarks9"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  hasFeedback
                >
                  <Input
                    readOnly={initialValues.remarks9 ? true : false}
                    // value={viewDetailsData?.firstName}
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export const FormDetailsModal = (props) => {
  const { onViewForm, onCloseForm, updateData, onUpdateFormCase } = props;
  return (
    <Modal
      key="CategoryForm"
      title="FORM DETAILS"
      width={1200}
      open={onViewForm}
      onCancel={() => onCloseForm()}
      footer={[
        <Button onClick={() => onCloseForm()} icon={<RollbackOutlined />}>
          CANCEL
        </Button>,
        <Popconfirm
          placement="top"
          title="Proceed on updating case form?"
          onConfirm={() => {
            onCloseForm();
            onUpdateFormCase();
          }}
          okText="Proceed"
          cancelText="Cancel"
        >
          <Button type="primary" icon={<PlusOutlined />}>
            UPDATE FORM
          </Button>
        </Popconfirm>,
      ]}
    >
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 16 }}>
          <Row gutter={12} justify="end">
            <Col
              xs={{ span: 22, offset: 2 }}
              md={{ span: 22, offset: 2 }}
              layout="horizontal"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                REMARKS
              </Title>
              <Input value={updateData?.remarks1} readOnly />
            </Col>

            <Col xs={{ span: 24 }} md={{ span: 24 }} layout="horizontal">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                Continuation of COC Form No.
              </Title>
              <Input value={updateData?.continuation} readOnly />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 24 }} layout="horizontal">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                WITHDRAWN/RELEASE BY
              </Title>
              <Input value={updateData?.withdrawnRelease1} readOnly />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 8 }} layout="vertical">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                WITHDRAWN SLIP NO.
              </Title>
              <Input value={updateData?.withdrawnSlipNo} readOnly />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 8 }} layout="vertical">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                DATE
              </Title>
              <Input value={updateData?.date1} readOnly />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 8 }} layout="vertical">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                TIME
              </Title>
              <Input value={updateData?.time1} readOnly />
            </Col>
            <Col
              xs={{ span: 22, offset: 2 }}
              md={{ span: 22, offset: 2 }}
              layout="horizontal"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                REMARKS
              </Title>
              <Input value={updateData?.remarks2} readOnly />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 24 }} layout="horizontal">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                RECEIVED BY
              </Title>
              <Input value={updateData?.receivedBy1} readOnly />
            </Col>
            <Col
              xs={{ span: 22, offset: 2 }}
              md={{ span: 22, offset: 2 }}
              layout="horizontal"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                AGENCY & ADDRESS
              </Title>
              <Input value={updateData?.agencyAndAddress1} readOnly />
            </Col>
            <Col
              xs={{ span: 11, offset: 2 }}
              md={{ span: 11, offset: 2 }}
              layout="vertical"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                DATE
              </Title>
              <Input value={updateData?.date2} readOnly />
            </Col>
            <Col xs={{ span: 11 }} md={{ span: 11 }} layout="vertical">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                TIME
              </Title>
              <Input value={updateData?.time2} readOnly />
            </Col>
            <Col
              xs={{ span: 22, offset: 2 }}
              md={{ span: 22, offset: 2 }}
              layout="horizontal"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                REMARKS
              </Title>
              <Input value={updateData?.remarks3} readOnly />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 24 }} layout="horizontal">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                TURNED OVER BY
              </Title>
              <Input value={updateData?.turnedOverBy1} readOnly />
            </Col>
            <Col
              xs={{ span: 22, offset: 2 }}
              md={{ span: 22, offset: 2 }}
              layout="horizontal"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                AGENCY & ADDRESS
              </Title>
              <Input value={updateData?.agencyAndAddress2} readOnly />
            </Col>
            <Col
              xs={{ span: 11, offset: 2 }}
              md={{ span: 11, offset: 2 }}
              layout="vertical"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                DATE
              </Title>
              <Input value={updateData?.date3} readOnly />
            </Col>
            <Col xs={{ span: 11 }} md={{ span: 11 }} layout="vertical">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                TIME
              </Title>
              <Input value={updateData?.time3} readOnly />
            </Col>
            <Col
              xs={{ span: 22, offset: 2 }}
              md={{ span: 22, offset: 2 }}
              layout="horizontal"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                REMARKS
              </Title>
              <Input value={updateData?.remarks4} readOnly />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 24 }} layout="horizontal">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                RECEIVED BY
              </Title>
              <Input value={updateData?.receivedBy2} readOnly />
            </Col>
            <Col
              xs={{ span: 22, offset: 2 }}
              md={{ span: 22, offset: 2 }}
              layout="horizontal"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                AGENCY & ADDRESS
              </Title>
              <Input value={updateData?.agencyAndAddress3} readOnly />
            </Col>
            <Col
              xs={{ span: 11, offset: 2 }}
              md={{ span: 11, offset: 2 }}
              layout="vertical"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                DATE
              </Title>
              <Input value={updateData?.date4} readOnly />
            </Col>
            <Col xs={{ span: 11 }} md={{ span: 11 }} layout="vertical">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                TIME
              </Title>
              <Input value={updateData?.time4} readOnly />
            </Col>
            <Col
              xs={{ span: 22, offset: 2 }}
              md={{ span: 22, offset: 2 }}
              layout="horizontal"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                REMARKS
              </Title>
              <Input value={updateData?.remarks5} readOnly />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 24 }} layout="horizontal">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                WITHDRAWN/RELEASE BY
              </Title>
              <Input value={updateData?.withdrawnRelease2} readOnly />
            </Col>
            <Col
              xs={{ span: 22, offset: 2 }}
              md={{ span: 22, offset: 2 }}
              layout="horizontal"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                AGENCY & ADDRESS
              </Title>
              <Input value={updateData?.agencyAndAddress4} readOnly />
            </Col>
            <Col
              xs={{ span: 11, offset: 2 }}
              md={{ span: 11, offset: 2 }}
              layout="vertical"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                DATE
              </Title>
              <Input value={updateData?.date5} readOnly />
            </Col>
            <Col xs={{ span: 11 }} md={{ span: 11 }} layout="vertical">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                TIME
              </Title>
              <Input value={updateData?.time5} readOnly />
            </Col>
            <Col
              xs={{ span: 22, offset: 2 }}
              md={{ span: 22, offset: 2 }}
              layout="horizontal"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                REMARKS
              </Title>
              <Input value={updateData?.remarks6} readOnly />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 24 }} layout="horizontal">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                RECEIVED BY
              </Title>
              <Input value={updateData?.receivedBy3} readOnly />
            </Col>
            <Col
              xs={{ span: 22, offset: 2 }}
              md={{ span: 22, offset: 2 }}
              layout="horizontal"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                AGENCY & ADDRESS
              </Title>
              <Input value={updateData?.agencyAndAddress5} readOnly />
            </Col>
            <Col
              xs={{ span: 11, offset: 2 }}
              md={{ span: 11, offset: 2 }}
              layout="vertical"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                DATE
              </Title>
              <Input value={updateData?.date6} readOnly />
            </Col>
            <Col xs={{ span: 11 }} md={{ span: 11 }} layout="vertical">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                TIME
              </Title>
              <Input value={updateData?.time6} readOnly />
            </Col>
            <Col
              xs={{ span: 22, offset: 2 }}
              md={{ span: 22, offset: 2 }}
              layout="horizontal"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                REMARKS
              </Title>
              <Input value={updateData?.remarks7} readOnly />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 24 }} layout="horizontal">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                TURNED OVER BY
              </Title>
              <Input value={updateData?.turnedOverBy2} readOnly />
            </Col>
            <Col
              xs={{ span: 22, offset: 2 }}
              md={{ span: 22, offset: 2 }}
              layout="horizontal"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                AGENCY & ADDRESS
              </Title>
              <Input value={updateData?.agencyAndAddress6} readOnly />
            </Col>
            <Col
              xs={{ span: 11, offset: 2 }}
              md={{ span: 11, offset: 2 }}
              layout="vertical"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                DATE
              </Title>
              <Input value={updateData?.date7} readOnly />
            </Col>
            <Col xs={{ span: 11 }} md={{ span: 11 }} layout="vertical">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                TIME
              </Title>
              <Input value={updateData?.time7} readOnly />
            </Col>
            <Col
              xs={{ span: 22, offset: 2 }}
              md={{ span: 22, offset: 2 }}
              layout="horizontal"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                REMARKS
              </Title>
              <Input value={updateData?.remarks8} readOnly />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 24 }} layout="horizontal">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                WITHDRAWN/RELEASE BY
              </Title>
              <Input value={updateData?.withdrawnRelease3} readOnly />
            </Col>
            <Col
              xs={{ span: 22, offset: 2 }}
              md={{ span: 22, offset: 2 }}
              layout="horizontal"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                AGENCY & ADDRESS
              </Title>
              <Input value={updateData?.agencyAndAddress7} readOnly />
            </Col>
            <Col
              xs={{ span: 11, offset: 2 }}
              md={{ span: 11, offset: 2 }}
              layout="vertical"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                DATE
              </Title>
              <Input value={updateData?.date8} readOnly />
            </Col>
            <Col xs={{ span: 11 }} md={{ span: 11 }} layout="vertical">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                TIME
              </Title>
              <Input value={updateData?.time8} readOnly />
            </Col>
            <Col
              xs={{ span: 22, offset: 2 }}
              md={{ span: 22, offset: 2 }}
              layout="horizontal"
            >
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                REMARKS
              </Title>
              <Input value={updateData?.remarks9} readOnly />
            </Col>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};

export const CaseDetailsModal = (props) => {
  const {
    viewADetailsModal,
    setViewADetailsModal,
    setCaseData,
    setViewLDeatailsImg,
    caseData,
    viewLDeatailsImg,
    onViewFormDetails,
  } = props;

  return (
    <Modal
      key="caseDetails"
      title="CASE DETAILS"
      width={1200}
      open={viewADetailsModal}
      onCancel={() => {
        setViewADetailsModal(false);
        setCaseData();
        setViewLDeatailsImg();
      }}
      footer={[
        <Button
          type="primary"
          icon={<ReadOutlined />}
          onClick={() => {
            onViewFormDetails();
          }}
        >
          View Form
        </Button>,
        <Button
          type="primary"
          icon={<RollbackOutlined />}
          key="cancel"
          onClick={() => {
            setViewADetailsModal(false);
            setCaseData();
            setViewLDeatailsImg();
          }}
        >
          Cancel
        </Button>,
      ]}
    >
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 16 }}>
          <Row gutter={12}>
            <Col xs={{ span: 24 }} md={{ span: 12 }} layout="vertical">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                Case Number
              </Title>
              <Input
                value={caseData?.caseNumber}
                readOnly
                style={{ borderRadius: "10px" }}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} layout="vertical">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                Item Number
              </Title>
              <Input
                value={caseData?.itemNumber}
                readOnly
                style={{ borderRadius: "10px" }}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 24 }} layout="vertical">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                Place
              </Title>
              <Input
                value={caseData?.place}
                readOnly
                style={{ borderRadius: "10px" }}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 8 }} layout="vertical">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                Date
              </Title>
              <Input
                value={`${new Date(caseData?.date).getMonth() + 1}-${new Date(
                  caseData?.date
                ).getDate()}-${new Date(caseData?.date).getFullYear()}`}
                readOnly
                style={{ borderRadius: "10px" }}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 8 }} layout="vertical">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                Time
              </Title>
              <Input
                value={caseData?.time}
                readOnly
                style={{ borderRadius: "10px" }}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 8 }} layout="vertical">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                Remarks
              </Title>
              <Input
                value={caseData?.remarks}
                readOnly
                style={{ borderRadius: "10px" }}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} layout="vertical">
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                Officer/Tech
              </Title>
              <Input
                value={caseData?.officer}
                readOnly
                style={{ borderRadius: "10px" }}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Title
                level={5}
                style={{
                  marginTop: "20px",
                }}
              >
                Evidence Image
              </Title>
              <Image src={viewLDeatailsImg} alt="Evidence Image" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};
