"use client";

import LoadingPage from "@/components/Loading";
import Password from "@/pages/Password";
import { useState, useEffect } from "react";

function Page() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);
        return () => clearTimeout(timer);
    });

    return (
        <div>
            {loading && <LoadingPage />}
            <Password />
        </div>
    );
}

export default Page;
