import React from 'react'
import Navbar from './Navbar'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";

const page1 = () => {
    const [rowData, setRowData] = useState([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" }
    ]);
    return (
        <>
            <Navbar />
            <div class="d-flex flex-row mb-3">
                <div class="p-2">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">One-off report</a></li>
                            <li><a class="dropdown-item" href="#"
                                data-bs-toggle="modal" data-bs-target="#exampleModal"
                            >Scheduled Report</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className="ag-theme-quartz" // applying the Data Grid theme
                style={{ height: 500 }} // the Data Grid will fill the size of the parent container
            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                //   pagination={true}
                //   paginationPageSize={10}
                //   defaultColDef={{
                //       resizable: true,
                //       flex: 1,
                //       minWidth: 100,
                //   }}
                />
            </div>

            {/* Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Create new Scheduled report</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-bg-light p-1">
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <div class="accordion" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header ">
                                                    <button class="accordion-button text-bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Base information changes
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body p-3">
                                                        <form>
                                                            <div class="mb-3">
                                                                <label class="form-label">Name *</label>
                                                                <input type="text" class="form-control" placeholder='Enter..' />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label class="form-label">Description</label>
                                                                <textarea class="form-control" placeholder='Enter..' rows="3">
                                                                </textarea>
                                                            </div>

                                                            <div class="form-check mt-3">
                                                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                                                <label class="form-check-label" for="exampleRadios1">
                                                                    Default radio
                                                                </label> <br />
                                                                <small>Lorem ipsum dolor site amet consectetur. </small>
                                                            </div>
                                                            <div class="form-check mt-3">
                                                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                                                <label class="form-check-label" for="exampleRadios2">
                                                                    Second default radio
                                                                </label> <br />
                                                                <small>Lorem ipsum dolor site amet consectetur. </small>
                                                            </div>
                                                            <div class="form-check mt-3">
                                                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                                                <label class="form-check-label" for="exampleRadios2">
                                                                    Second default radio
                                                                </label> <br />
                                                                <small>Lorem ipsum dolor site amet consectetur. </small>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button text-bg-light collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Timeframe
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body p-2" >
                                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button text-bg-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Accordion Item #3
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body p-2">
                                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4 custom_right_side'>
                                        <div className='p-3'>
                                            <h6>Summary</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn bg-body-secondary " data-bs-dismiss="modal">cancel</button>
                            <button type="button" class="btn bg-dark-subtle">finish</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page1