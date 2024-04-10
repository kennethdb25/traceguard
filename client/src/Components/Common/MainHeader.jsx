import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd";
import {
  Layout,
  Menu,
  Input,
  Space,
  Popconfirm,
  message,
  Modal,
  Button,
  Col,
  Row,
  Typography,
  Drawer,
  Form,
  Select,
} from "antd";
import {
  BellFilled,
  UserOutlined,
  LogoutOutlined,
  RollbackOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { LoginContext } from "../../Context/Context";
const { Header } = Layout;
const { Search } = Input;
const { Title, Text } = Typography;

const item = ["HOME", "HISTORY", "TERMS"];
const items = item.map((nav, index) => ({
  key: index + 1,
  label: nav,
}));

const MainHeader = (props) => {
  const { setData, width } = props;
  const { userData, setUserData } = useContext(LoginContext);
  const [openProfile, setOpenProfile] = useState(false);
  const [openAddAccount, setOpenAddAccount] = useState(false);
  let condition;
  if (userData) {
    condition = userData.validUser?.accountType;
  }
  const history = useNavigate();
  const [form] = Form.useForm();

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const handleChange = (e) => {
    console.log(e.key);
    // eslint-disable-next-line eqeqeq
    if (e.key == 1) {
      console.log("HOME");
      history("/home");
      // eslint-disable-next-line eqeqeq
    } else if (e.key == 2) {
      console.log("HISTORY");
      history("/history");
    } else {
      console.log("Terms");
      history("/terms");
    }
  };

  const onFinishCreateAccount = async (values) => {
    const data = await fetch("/api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const res = await data.json();

    if (res.status === 201) {
      setOpenAddAccount(false);
      form.resetFields();
      message.success("Account Created Successfully");
    }
  };

  const handleLogout = async () => {
    let token = localStorage.getItem("userToken");
    const res = await fetch("/api/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        Accept: "application/json",
      },
      credentials: "include",
    });
    let email = { email: userData?.validUser.email };
    await fetch("/api/logout-history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });

    const data = await res.json();

    if (data.status === 201) {
      setData(false);
      message.success("Logging Out");
      setTimeout(() => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("categorySelect");
        history("/");
        setUserData(null);
        setData(true);
      }, 3000);
    }
  };



  return (
    <>
      {userData ? (
        <>
          <Header
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="demo-logo" />
            <h3 style={{ color: "white", marginRight: "40px" }}>TRACEGUARD</h3>
            <Menu
              theme="dark"
              mode="horizontal"
              // defaultSelectedKeys={["1"]}
              onSelect={(e) => {
                handleChange(e);
              }}
              items={items}
              style={{
                flex: 1,
                minWidth: 0,
              }}
            />
            <Space direction="horizontal">
              <div style={{ display: "flex", gap: "30px" }}>
                {width <= 450 ? null : (
                  <>
                <Search
                  placeholder="Search"
                  onSearch={onSearch}
                  style={{
                    width: 200,
                  }}
                />
                  </>
                )}
                <BellFilled style={{ color: "white", cursor: "pointer" }} />
                <UserOutlined
                  style={{ color: "white", cursor: "pointer" }}
                  onClick={() => setOpenProfile(true)}
                />
                <Popconfirm
                  placement="bottom"
                  title="Are you sure want to logout?"
                  onConfirm={() => handleLogout()}
                  okText="Yes"
                  cancelText="No"
                >
                  <LogoutOutlined
                    style={{ color: "white", cursor: "pointer" }}
                  />
                </Popconfirm>
              </div>
            </Space>
          </Header>

          <Modal
            key="ProfileAccount"
            title="PROFILE ACCOUNT"
            width={1200}
            open={openProfile}
            onCancel={() => setOpenProfile(false)}
            footer={[
              <Button
                onClick={() => setOpenAddAccount(true)}
                icon={<PlusOutlined />}
                disabled={condition === "Admin" ? false : true}
              >
                ADD ACCOUNT
              </Button>,
              <Button
                onClick={() => setOpenProfile(false)}
                icon={<RollbackOutlined />}
              >
                CANCEL
              </Button>,
            ]}
          >
            <Row>
              <Col xs={{ span: 24 }} md={{ span: 16 }}>
                <Row gutter={12}>
                  <Col xs={{ span: 24 }} md={{ span: 8 }} layout="vertical">
                    <Title
                      level={5}
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      BADGE NUMBER
                    </Title>
                    <Input
                      value={userData?.validUser.badgeNumber}
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
                      FIRST NAME
                    </Title>
                    <Input
                      value={userData?.validUser.firstName}
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
                      MIDDLE NAME
                    </Title>
                    <Input
                      value={userData?.validUser.middleName}
                      readOnly
                      style={{ borderRadius: "10px" }}
                    />
                  </Col>
                </Row>
                <Row gutter={12}>
                  <Col xs={{ span: 24 }} md={{ span: 8 }} layout="vertical">
                    <Title
                      level={5}
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      LAST NAME
                    </Title>
                    <Input
                      value={userData?.validUser.lastName}
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
                      ACCOUNT TYPE
                    </Title>
                    <Input
                      value={userData?.validUser.accountType}
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
                      EMAIL
                    </Title>
                    <Input
                      value={userData?.validUser.email}
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
                      ADDRESS
                    </Title>
                    <Input
                      value={userData?.validUser.address}
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
                      COMPANY
                    </Title>
                    <Input
                      value={userData?.validUser.company}
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
                      COMPANY ADDRESS
                    </Title>
                    <Input
                      value={userData?.validUser.companyAddress}
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
                      ACCOUNT TYPE
                    </Title>
                    <Input
                      value={userData?.validUser.accountType}
                      readOnly
                      style={{ borderRadius: "10px" }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Modal>

          <Drawer
            key="addAccount"
            title="CREATE AN ACCOUNT"
            placement="left"
            onClose={() => setOpenAddAccount(false)}
            open={openAddAccount}
            height="100vh"
            width="40%"
            style={{ display: "flex", justifyContent: "center" }}
            extra={<Space></Space>}
            footer={[
              <div
                style={
                  width >= 450
                    ? {
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "20px",
                      }
                    : {
                        display: "flex",
                        justifyContent: "flex-start",
                        gap: "20px",
                      }
                }
              >
                <Button type="primary" onClick={() => setOpenAddAccount(false)}>
                  CANCEL
                </Button>

                <Button type="primary" onClick={() => form.submit()}>
                  CREATE ACCOUNT
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
              onFinish={onFinishCreateAccount}
              autoComplete="off"
              style={{
                width: "100%",
              }}
            >
              <Col xs={{ span: 24 }} md={{ span: 24 }}>
                <Row gutter={12}>
                  <Col xs={{ span: 24 }} md={{ span: 8 }} layout="vertical">
                    <Form.Item
                      label="First Name"
                      name="firstName"
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
                          message: "Please input your first name!",
                        },
                        {
                          pattern: /^[a-zA-Z_ ]*$/,
                          message:
                            "Numbers or special character are not allowed",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your first name" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 8 }}>
                    <Form.Item
                      label="Middle Name"
                      name="middleName"
                      labelCol={{
                        span: 24,
                      }}
                      wrapperCol={{
                        span: 24,
                      }}
                      hasFeedback
                      rules={[
                        {
                          pattern: /^[a-zA-Z]*$/,
                          message:
                            "Numbers or special character are not allowed",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your middle name" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 8 }}>
                    <Form.Item
                      label="Last Name"
                      name="lastName"
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
                          message: "Please input your last name!",
                        },
                        {
                          pattern: /^[a-zA-Z]*$/,
                          message:
                            "Numbers or special character are not allowed",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your last name" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={12}>
                  <Col xs={{ span: 24 }} md={{ span: 8 }}>
                    <Form.Item
                      label="Age"
                      name="age"
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
                          message: "Please input your age!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your age" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 8 }}>
                    <Form.Item
                      label="Badge Number"
                      name="badgeNumber"
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
                          message: "Please input your badge number!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your badge number" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 8 }}>
                    <Form.Item
                      label="Account Type"
                      name="accountType"
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
                          message: "Please input your account type!",
                        },
                      ]}
                    >
                      <Select placeholder="Select an Account Type">
                        <Select.Option value={"User"}>User</Select.Option>
                        <Select.Option value={"Admin"}>Admin</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={12}>
                  <Col xs={{ span: 24 }} md={{ span: 24 }}>
                    <Form.Item
                      label="Address"
                      name="address"
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
                          message: "Please enter your address!",
                        },
                      ]}
                    >
                      <Input placeholder="House No./Street Name/Barangay/Municipality/Province" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={12}>
                  <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <Form.Item
                      label="Company"
                      name="company"
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
                          message: "Please enter your company!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your company" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <Form.Item
                      label="Company Address"
                      name="companyAddress"
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
                          message: "Please enter your company address!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your company address" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={12}>
                  <Col xs={{ span: 24 }} md={{ span: 8 }}>
                    <Form.Item
                      label="Email"
                      name="email"
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
                          type: "email",
                          required: true,
                          message: "Please enter a valid email",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your email" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 8 }}>
                    <Form.Item
                      label="Password"
                      name="password"
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
                          message: "Please input your password!",
                        },
                        { whitespace: true },
                        { min: 8 },
                        { max: 26 },
                        {
                          pattern:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,26}$/,
                          message:
                            "Must contain 1 uppercase, 1 lowercase, 1 number, and 1 special character.",
                        },
                      ]}
                    >
                      <Input.Password placeholder="********" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 8 }}>
                    <Form.Item
                      label="Confirm Password"
                      name="confirmPassword"
                      labelCol={{
                        span: 24,
                        //offset: 2
                      }}
                      wrapperCol={{
                        span: 24,
                        //offset: 2
                      }}
                      hasFeedback
                      dependencies={["password"]}
                      rules={[
                        {
                          required: true,
                          message: "Confirm Password is required!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }

                            return Promise.reject(
                              "Passwords does not matched."
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password placeholder="********" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 24 }}>
                    <div className="privacy-data">
                      <Text strong>Note: </Text>
                      <Text>
                        Thank you for choosing to sign up. We value your privacy
                        and want to assure you that we are committed to
                        protecting the personal information you provide.
                      </Text>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={{ span: 0 }} md={{ span: 4 }}></Col>
            </Form>
          </Drawer>
        </>
      ) : null}
    </>
  );
};

export default MainHeader;
