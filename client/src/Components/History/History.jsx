import React, { useContext, useEffect, useState } from "react";
import "antd/dist/antd";
import { theme, Layout, Table } from "antd";
import { LoginContext } from "../../Context/Context";
const { Content } = Layout;

const History = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [loginHistoryData, setLoginHistoryData] = useState();
  const { userData } = useContext(LoginContext);

  const getUserLoginHistory = async () => {
    const data = await fetch(
      `/api/login-history?badgeNumber=${userData.validUser?.badgeNumber}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const res = await data.json();
    setLoginHistoryData(res.body);
  };

  useEffect(() => {
    getUserLoginHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      title: "Badge Number",
      dataIndex: "badgeNumber",
      key: "badgeNumber",
      width: "15%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "15%",
    },
    {
      title: "Date and Time",
      dataIndex: "dateAndTime",
      key: "dateAndTime",
      width: "20%",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: "15%",
    },
  ];
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
        <div className="terms-header">
          <h1>LOGIN HISTORY</h1>
        </div>
        <div className="table-responsive">
          <Table
            key="BorrowedBook"
            columns={columns}
            dataSource={loginHistoryData}
            // pagination={paginationStudentBorrowed}
          />
        </div>
      </Content>
    </div>
  );
};

export default History;
