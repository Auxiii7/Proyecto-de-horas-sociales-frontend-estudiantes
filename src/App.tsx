import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import { InstitucionesPage, InstitucionDetallePage } from './pages/InstitucionesPage';
import { ProyectosPage, ProyectoDetallePage } from './pages/ProyectosPage';

function Shell({ activePage }: { activePage: string }) {
  return (
    <div className="app-shell">
      <Header activePage={activePage} />
      <main>
        <Routes>
          <Route path="/instituciones" element={<InstitucionesPage />} />
          <Route path="/instituciones/:id" element={<InstitucionDetallePage />} />
          <Route path="/proyectos" element={<ProyectosPage />} />
          <Route path="/proyectos/:id" element={<ProyectoDetallePage />} />
          <Route path="*" element={<Navigate to="/login/estudiante" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const activePage = location.pathname.split('/')[1] || 'login';

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login/estudiante" replace />} />
      <Route path="/login/docente" element={<LoginPage tipo="docente" />} />
      <Route path="/login/estudiante" element={<LoginPage tipo="estudiante" />} />
      <Route path="/*" element={<Shell activePage={activePage} />} />
    </Routes>
  );
}
