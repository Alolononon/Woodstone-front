import React from "react";
import TuitionFees from "./components/TuitionFees";
import SignUpMoreDiscounts from "./components/SignUpMoreDiscounts";
import RegisterPopout from "./components/RegisterPopOut";

export default function PricePage() {
    return (
        <div>
            <RegisterPopout />
            <TuitionFees />
            <SignUpMoreDiscounts />
        </div>
    )
}   