import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import DashboardLayout from './components/layout/DashboardLayout';
import CommunityHome from './pages/community/CommunityHome';
import CommunityMap from './pages/community/CommunityMap';
import ResponseTeams from './pages/dashboard/ResponseTeams';
import IncidentReports from './pages/dashboard/IncidentReports';
import ReportIncident from './pages/community/ReportIncident';
import VolunteerTasks from './pages/volunteer/VolunteerTasks';
import AssignTask from './pages/dashboard/AssignTask';
import ManageResources from './pages/dashboard/ManageResources';
import ResourceTracking from './pages/dashboard/ResourceTracking';
import Analytics from './pages/dashboard/Analytics';
import CrisisMap from './pages/dashboard/CrisisMap';
import SendAlerts from './pages/dashboard/SendAlerts';
import AgencyLayout from './pages/agency/AgencyLayout';
import AgencyHome from './pages/agency/AgencyHome';
import AgencyTasks from './pages/agency/AgencyTasks';
import AssignTaskAgency from './pages/agency/AssignTaskAgency';
import IncidentReportsAgency from './pages/agency/IncidentReportsAgency';
import ResponseTeamsAgency from './pages/agency/ResponseTeams'; // Renamed to avoid config with dashboard/ResponseTeams
import AgencyResources from './pages/agency/AgencyResources';
import AgencyAnalytics from './pages/agency/AgencyAnalytics';
import AgencyAlerts from './pages/agency/AgencyAlerts';
import AgencyStatus from './pages/agency/AgencyStatus';
import AgencyCrisisMap from './pages/agency/CrisisMap';

// Volunteer Components
import VolunteerLayout from './pages/volunteer/VolunteerLayout';
import VolunteerDashboard from './pages/volunteer/VolunteerDashboard';
import UserProfile from './pages/UserProfile';
import VolunteerMap from './pages/volunteer/VolunteerMap';
import VolunteerResources from './pages/volunteer/VolunteerResources';
import VolunteerNotifications from './pages/volunteer/VolunteerNotifications';
import VolunteerAnalytics from './pages/volunteer/VolunteerAnalytics';
import VolunteerProfile from './pages/volunteer/VolunteerProfile';
import VolunteerPerformance from './pages/volunteer/VolunteerPerformance';

import './index.css';

import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="community" replace />} />
          <Route path="community" element={<CommunityHome />} />
          <Route path="community/report" element={<ReportIncident />} />
          <Route path="community/map" element={<CommunityMap />} />
          <Route path="teams" element={<ResponseTeams />} />
          <Route path="incidents" element={<IncidentReports />} />
          <Route path="volunteer" element={<VolunteerTasks />} />
          <Route path="assign-task" element={<AssignTask />} />
          <Route path="resources" element={<ManageResources />} />
          <Route path="tracking" element={<ResourceTracking />} />
          <Route path="alerts" element={<SendAlerts />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="map" element={<CrisisMap />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>

        {/* Agency Dashboard - Standalone Layout */}
        <Route path="/dashboard/agency" element={<AgencyLayout />}>
          <Route index element={<AgencyHome />} />
          <Route path="tasks" element={<AgencyTasks />} />
          <Route path="assign-task" element={<AgencyTasks />} />
          <Route path="incidents" element={<IncidentReportsAgency />} />
          <Route path="incident-reports" element={<IncidentReportsAgency />} />
          <Route path="map" element={<AgencyCrisisMap />} />
          <Route path="resources" element={<AgencyResources />} />
          <Route path="response-teams" element={<ResponseTeamsAgency />} />
          <Route path="analytics" element={<AgencyAnalytics />} />
          <Route path="alerts" element={<AgencyAlerts />} />
          <Route path="status" element={<AgencyStatus />} />
        </Route>

        {/* Agency Assign Task - Standalone Layout */}
        <Route path="/dashboard/agency/assign-task/:taskId" element={<AssignTaskAgency />} />

        {/* Volunteer Dashboard Routes */}
        <Route path="/volunteer" element={<VolunteerLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<VolunteerDashboard />} />
          <Route path="map" element={<VolunteerMap />} />
          <Route path="tasks" element={<VolunteerTasks />} />
          <Route path="resources" element={<VolunteerResources />} />
          <Route path="notifications" element={<VolunteerNotifications />} />
          <Route path="analytics" element={<VolunteerAnalytics />} />
          <Route path="performance" element={<VolunteerPerformance />} />
          <Route path="profile" element={<VolunteerProfile />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
