import { useEffect, useState } from "react";
import loanApplicationsData from "./loanApplicationsData.json";
import { Layout, Table, Tag, Input, Button } from "antd";
import { PlusOutlined, QuestionCircleOutlined } from "@ant-design/icons";

import { capitalize } from "./utils";
import "./App.css";
import Logo from "./logo";

const { Header, Content, Footer } = Layout;

const columns = [
  {
    title: "Client Details",
    dataIndex: "clientName",
    key: "clientName",
    sorter: (a, b) => ("" + a.clientName).localeCompare(b.clientName),
  },
  {
    title: "Address",
    dataIndex: "propertyAddress",
    key: "propertyAddress",
    sorter: (a, b) => ("" + a.propertyAddress).localeCompare(b.propertyAddress),
    render: (address) => (
      <span style={{ fontWeight: "lighter" }}>{address}</span>
    ),
  },
  {
    title: "Type",
    dataIndex: "loanType",
    key: "loanType",
    render: (type) => capitalize(type.toLowerCase()),
    sorter: (a, b) => ("" + a.loanType).localeCompare(b.loanType),
  },
  {
    title: "All in rate",
    dataIndex: "allInRate",
    key: "allInRate",
    render: (rate) => (rate * 100).toFixed(2) + "%",
    sorter: (a, b) => a.allInRate - b.allInRate,
  },
  {
    title: "Loan Amount",
    dataIndex: "loanAmount",
    key: "loanAmount",
    render: (amount) =>
      amount.toLocaleString("en-UK", {
        style: "currency",
        currency: "GBP",
      }),
    sorter: (a, b) => a.loanAmount - b.loanAmount,
  },
  {
    title: "Created on",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (timestamp) => timestamp.substr(0, 10),
    // new Date(timestamp).toLocaleDateString("en-UK", "yyyy-mm-dd"),
    sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
  },
  {
    title: "Status",
    key: "submittedAt",
    dataIndex: "submittedAt",
    render: (submitted) => (
      <Tag color={submitted ? "#FDF2E0" : "#FDEBEE"} key={submitted}>
        <span style={{ color: "#000" }}>
          {submitted ? "Submitted" : "Incomplete"}
        </span>
      </Tag>
    ),
    sorter: (a, b) => new Date(a.submittedAt) - new Date(b.submittedAt),
  },
];

const App = () => {
  const [loanApplications, setLoanApplications] = useState();
  useEffect(() => {
    setLoanApplications(loanApplicationsData.data);
  }, []);

  const searchTable = (event) => {
    const query = event.target.value.toLowerCase();
    if (query.length === 0) {
      setLoanApplications(loanApplicationsData.data);
    } else {
      setLoanApplications(
        loanApplications.filter((d) =>
          d.clientName.toLowerCase().includes(query)
        )
      );
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header className="app-header">
        <Logo />
        <div className="header-buttons">
          <Button
            className="create-app-btn"
            size="large"
            type="primary"
            icon={<PlusOutlined />}
          >
            Create Application
          </Button>
          <Button
            className="help-btn"
            size="large"
            icon={<QuestionCircleOutlined />}
          >
            Help
          </Button>
          <Button className="logout-btn" size="large" type="link">
            Logout
          </Button>
        </div>
      </Header>
      <Content style={{ padding: 50, background: "#F5F7F9" }}>
        <div>
          <p>
            Welcome to OakNorth. Here, you can manage all your loan applications
            in one place.
          </p>
          <Input
            className="search-input"
            placeholder="Search by Client's Name"
            onChange={searchTable}
            allowClear
          />
          <div className="loan-count-wrapper">
            <p className="loan-count-text">{`${loanApplications?.length} total loan applications`}</p>
          </div>
          <Table
            className="main-table"
            columns={columns}
            dataSource={loanApplications}
            rowKey="id"
          />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Created by{" "}
        <a href="https://github.com/ashvinpanicker">Ashvin Panicker</a>
      </Footer>
    </Layout>
  );
};

export default App;
