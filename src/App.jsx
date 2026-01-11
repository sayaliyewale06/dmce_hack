import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import DashboardLayout from './components/layout/DashboardLayout';
import CommunityHome from './pages/community/CommunityHome';
import ResponseTeams from './pages/dashboard/ResponseTeams';
import IncidentReports from './pages/dashboard/IncidentReports';
import VolunteerTasks from './pages/volunteer/VolunteerTasks';
import AssignTask from './pages/dashboard/AssignTask';
import ManageResources from './pages/dashboard/ManageResources';
import ResourceTracking from './pages/dashboard/ResourceTracking';
import SendAlerts from './pages/dashboard/SendAlerts';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="community" replace />} />
          <Route path="community" element={<CommunityHome />} />
          <Route path="teams" element={<ResponseTeams />} />
          <Route path="incidents" element={<IncidentReports />} />
          <Route path="volunteer" element={<VolunteerTasks />} />
          <Route path="assign-task" element={<AssignTask />} />
          <Route path="resources" element={<ManageResources />} />
          <Route path="tracking" element={<ResourceTracking />} />
          <Route path="alerts" element={<SendAlerts />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
