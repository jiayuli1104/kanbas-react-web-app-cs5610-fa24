import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";

export default function ModuleControlButtons() {
    return (
        <div className="float-end">
        <GreenCheckmark />
        <BsPlus className="fs-4 me-2"/>
        <IoEllipsisVertical className="fs-4" />
    </div>
    );
}