// import { useState } from 'react';
// import { Layout, Menu, Breadcrumb } from 'antd';
// import { DashboardOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
// import './dashboard.css';

// const { Header, Content, Sider } = Layout;

// export default function Dashboard() {
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       {/* Sidebar */}
//       <Sider
//         collapsible
//         collapsed={collapsed}
//         onCollapse={toggleCollapsed}
//         theme="dark"
//         width={250}
//       >
//         <div className="logo" />
//         <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
//           <Menu.Item key="1" icon={<DashboardOutlined />}>
//             Dashboard
//           </Menu.Item>
//           <Menu.Item key="2" icon={<UserOutlined />}>
//             Users
//           </Menu.Item>
//           <Menu.Item key="3" icon={<SettingOutlined />}>
//             Settings
//           </Menu.Item>
//         </Menu>
//       </Sider>

//       {/* Layout Content */}
//       <Layout className="site-layout">
//         <Header className="site-layout-background" style={{ padding: 0 }}>
//           <div className="header-content">
//             <h2 style={{ color: 'white', textAlign: 'center' }}>Admin Dashboard</h2>
//           </div>
//         </Header>

//         <Content style={{ padding: '20px', margin: 0 }}>
//           <Breadcrumb style={{ margin: '16px 0' }}>
//             <Breadcrumb.Item>Home</Breadcrumb.Item>
//             <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
//           </Breadcrumb>

//           {/* Dashboard content */}
//           <div className="dashboard-content">
//             <h3>Welcome to the Admin Dashboard!</h3>
//             <p>Manage your apps settings, users, and more from this panel.</p>
//           </div>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// }


import  { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { DashboardOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import necessary Router components
import './dashboard.css';

// Define the content components for each route
const DashboardContent = () => (
  <div className="dashboard-content">
    <h3>Welcome to the Admin Dashboard!</h3>
    <p>Manage your app s settings, users, and more from this panel.</p>
  </div>
);

const UsersContent = () => (
  <div className="dashboard-content">
    <h3>Users Management</h3>
    <p>Here you can manage your app's users.</p>
  </div>
);

const SettingsContent = () => (
  <div className="dashboard-content">
    <h3>Settings</h3>
    <p>Configure your app's settings here.</p>
  </div>
);

const { Header, Content, Sider } = Layout;

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router> {/* Wrap your app in BrowserRouter */}
      <Layout style={{ minHeight: '100vh' }}>
        {/* Sidebar */}
        <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed} theme="dark" width={250}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              <Link to="/">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to="/users">Users</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<SettingOutlined />}>
              <Link to="/settings">Settings</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        {/* Layout Content */}
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div className="header-content">
              <h2 style={{ color: 'white', textAlign: 'center' }}>Admin Dashboard</h2>
            </div>
          </Header>

          <Content style={{ padding: '20px', margin: 0 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>

            {/* Switch between different components */}
            <Routes>
              <Route path="/" element={<DashboardContent />} />
              <Route path="/users" element={<UsersContent />} />
              <Route path="/settings" element={<SettingsContent />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}
