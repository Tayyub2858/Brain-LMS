import React from 'react'
import WorldCupDataSet from '../../Assets/Dataset/World+Cup.zip'
import { Grid } from "@material-ui/core";
import Progress from '../../Assets/TeamTraning/Progress.png'
import './DataplaygroundStyle.css'


const DataSetCard = () => {
    return (
     
        <div className="dataset-card">
            <Grid container>
                <Grid item xs={12} sm={12} md={2}><img src={Progress} alt="" className="dataset-img" /></Grid>
                <Grid item xs={12} sm={12} md={10}>
                    <h1 className="dataset-heading">World Cup </h1>
                    <p className="dataset-txt">Historical match data leading up to the 2022 FIFA World Cup.</p>
                    <hr />
                    <div className="card-desc">
                        <Grid container>
                            <Grid item xs={4} sm={4} md={1}>
                                <p className="dataset-card-title">
                                    File Type
                                </p>
                                <p className="dataset-card-txt">
                                    <span className="card-tags">CSV</span>
                                </p>
                            </Grid>
                            <Grid item xs={4} sm={4} md={3}>
                                <p className="dataset-card-title">
                                    Tags
                                </p>
                                <p className="dataset-card-txt">
                                    <span className="card-tags">Sports</span>
                                    <span className="card-tags">Geospatial</span>
                                    <span className="card-tags">Time Series</span>
                                </p>
                            </Grid>
                            <Grid item xs={4} sm={4} md={2}>
                                <p className="dataset-card-title">
                                    Data Structure
                                </p>
                                <p className="dataset-card-txt">
                                    <span className="card-tags">Table</span>
                                </p>
                            </Grid>
                            <Grid item xs={4} sm={4} md={2}>
                                <p className="dataset-card-title">
                                    # OF RECORDS
                                </p>
                                <p className="dataset-card-txt">
                                    <span className="card-tags">19,619</span>
                                </p>
                            </Grid>
                            <Grid item xs={4} sm={4} md={2}>
                                <p className="dataset-card-title">
                                    # OF FIELDS
                                </p>
                                <p className="dataset-card-txt">
                                    <span className="card-tags">32</span>
                                </p>
                            </Grid>
                            <Grid item xs={4} sm={4} md={2}>
                                <a href={WorldCupDataSet} download="DataSet" target='blank'>
                                    <button className="dataset-download">Download</button>
                                </a>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
   
    )
}

export default DataSetCard;