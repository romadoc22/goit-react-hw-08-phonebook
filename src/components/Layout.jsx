import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppBar } from "./AppBar/AppBar";
import Container from "./Container/Container";

const Layout = () => {
    return (
        <Container>
            <AppBar />
            <main>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
            </main>
        </Container>
    )
};

export default Layout;