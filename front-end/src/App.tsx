import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./shared/layout/AppLayout";
import { Home } from "./pages/Home";
import { Concluded } from './pages/Concluded';
import { Pending } from './pages/Pending';


export function App() {
  return (
    <>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/concluidas" element={<Concluded />} />
            <Route path="/pendentes" element={<Pending />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </>
  );
}
