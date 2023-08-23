import ProductsPreview from "./containers/ProductsPreview/ProductsPreview";
import ProductsTable from "./containers/ProductsTable/ProductsTable";
import Login from "./containers/Login/Login";
import PreviewIdCard from "./containers/PreviewIdCard/PreviewIdCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<PrivateRoute />}>
                <Route path="/products" element={<ProductsTable />} />
                <Route path="/preview" element={<ProductsPreview />} />
                <Route path="/preview/:id" element={<PreviewIdCard />} />
            </Route>

            <Route path="*" element={<div>404 | Page is not found !</div>} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;