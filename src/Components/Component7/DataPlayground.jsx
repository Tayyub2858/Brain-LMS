import React from "react";
import './DataplaygroundStyle.css'
import DrawerDasboard from "../../Modules/Drawer/DasboardDrawer";
import DataSetCard from "./DataSetCard";
const DataPlayground = () => {
    return (
        <>
            <DrawerDasboard componentName={"Data Playground"} />
            <div className="dataplayground-container">
                <DataSetCard />
                <DataSetCard />
            </div>
        </>
    )
}
export default DataPlayground;
