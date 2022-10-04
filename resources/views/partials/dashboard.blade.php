
  <div class="row g-3 mb-3">
      
      <div class="col-md-6 col-xxl-3">
        <div class="card h-md-100 ecommerce-card-min-width">
          
          <div class="card-header pb-0">
            <h6 class="mb-0 mt-2 d-flex align-items-center">Ventas Semanales<span class="ms-1 text-400" data-bs-toggle="tooltip" data-bs-placement="top" title="Calculado según las ventas de la semana pasada"><span class="far fa-question-circle" data-fa-transform="shrink-1"></span></span></h6>
          </div>

          <div class="card-body d-flex flex-column justify-content-end">
            <div class="row">
              <div class="col">
                <p class="font-sans-serif lh-1 mb-1 fs-4">$0.00</p><span class="badge badge-soft-success rounded-pill fs--2">+00.00%</span>
              </div>
              <div class="col-auto ps-0">
                <div class="echart-bar-weekly-sales h-100"></div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div class="col-md-6 col-xxl-3">
        <div class="card h-md-100">

          <div class="card-header pb-0">
            <h6 class="mb-0 mt-2">Total de Pedidos</h6>
          </div>

          <div class="card-body d-flex flex-column justify-content-end">
            <div class="row justify-content-between">
              <div class="col-auto align-self-end">
                <div class="fs-4 fw-normal font-sans-serif text-700 lh-1 mb-1">0</div><span class="badge rounded-pill fs--2 bg-200 text-primary"><span class="fas fa-caret-up me-1"></span>00.00%</span>
              </div>
              <div class="col-auto ps-0 mt-n4">
                <div class="echart-default-total-order" data-echarts='{"tooltip":{"trigger":"axis","formatter":"{b0} : {c0}"},"xAxis":{"data":["Sem 1","Sem 2","Sem 3","Sem 4"]},"series":[{"type":"line","data":[20,40,100,120],"smooth":true,"lineStyle":{"width":3}}],"grid":{"bottom":"2%","top":"2%","right":"10px","left":"10px"}}' data-echart-responsive="true"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

  </div>

  <div class="row g-0">

    <div class="col-lg-6 pe-lg-2 mb-3">
      <div class="card h-lg-100 overflow-hidden">
        <div class="card-body p-0">
          <div class="table-responsive scrollbar">
            <table class="table table-dashboard mb-0 table-borderless fs--1 border-200">
              <thead class="bg-light">
                <tr class="text-900">
                  <th>Productos Mejor Vendidos</th>
                  <th class="text-end">Revenue ($3333)</th>
                  <th class="pe-card text-end" style="width: 8rem">Revenue (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-bottom border-200">
                  <td>
                    <div class="d-flex align-items-center position-relative"><img class="rounded-1 border border-200" src="{{asset('img/products/12.png')}}" width="60" alt="" />
                      <div class="flex-1 ms-3">
                        <h6 class="mb-1 fw-semi-bold"><a class="text-dark stretched-link" href="#!">Raven Pro</a></h6>
                        <p class="fw-semi-bold mb-0 text-500">Landing</p>
                      </div>
                    </div>
                  </td>
                  <td class="align-middle text-end fw-semi-bold">$1311</td>
                  <td class="align-middle pe-card">
                    <div class="d-flex align-items-center">
                      <div class="progress me-3 rounded-3 bg-200" style="height: 5px;width:80px">
                        <div class="progress-bar rounded-pill" role="progressbar" style="width: 39%;" aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="fw-semi-bold ms-2">39%</div>
                    </div>
                  </td>
                </tr>
                <tr class="border-bottom border-200">
                  <td>
                    <div class="d-flex align-items-center position-relative"><img class="rounded-1 border border-200" src="{{asset('img/products/10.png')}}" width="60" alt="" />
                      <div class="flex-1 ms-3">
                        <h6 class="mb-1 fw-semi-bold"><a class="text-dark stretched-link" href="#!">Boots4</a></h6>
                        <p class="fw-semi-bold mb-0 text-500">Portfolio</p>
                      </div>
                    </div>
                  </td>
                  <td class="align-middle text-end fw-semi-bold">$860</td>
                  <td class="align-middle pe-card">
                    <div class="d-flex align-items-center">
                      <div class="progress me-3 rounded-3 bg-200" style="height: 5px;width:80px">
                        <div class="progress-bar rounded-pill" role="progressbar" style="width: 26%;" aria-valuenow="26" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="fw-semi-bold ms-2">26%</div>
                    </div>
                  </td>
                </tr>
                <tr class="border-bottom border-200">
                  <td>
                    <div class="d-flex align-items-center position-relative"><img class="rounded-1 border border-200" src="{{asset('img/products/11.png')}}" width="60" alt="" />
                      <div class="flex-1 ms-3">
                        <h6 class="mb-1 fw-semi-bold"><a class="text-dark stretched-link" href="#!">Falcon</a></h6>
                        <p class="fw-semi-bold mb-0 text-500">Admin</p>
                      </div>
                    </div>
                  </td>
                  <td class="align-middle text-end fw-semi-bold">$539</td>
                  <td class="align-middle pe-card">
                    <div class="d-flex align-items-center">
                      <div class="progress me-3 rounded-3 bg-200" style="height: 5px;width:80px">
                        <div class="progress-bar rounded-pill" role="progressbar" style="width: 16%;" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="fw-semi-bold ms-2">16%</div>
                    </div>
                  </td>
                </tr>
                <tr class="border-bottom border-200">
                  <td>
                    <div class="d-flex align-items-center position-relative"><img class="rounded-1 border border-200" src="{{asset('img/products/14.png')}}" width="60" alt="" />
                      <div class="flex-1 ms-3">
                        <h6 class="mb-1 fw-semi-bold"><a class="text-dark stretched-link" href="#!">Slick</a></h6>
                        <p class="fw-semi-bold mb-0 text-500">Builder</p>
                      </div>
                    </div>
                  </td>
                  <td class="align-middle text-end fw-semi-bold">$343</td>
                  <td class="align-middle pe-card">
                    <div class="d-flex align-items-center">
                      <div class="progress me-3 rounded-3 bg-200" style="height: 5px;width:80px">
                        <div class="progress-bar rounded-pill" role="progressbar" style="width: 10%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="fw-semi-bold ms-2">10%</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center position-relative"><img class="rounded-1 border border-200" src="{{asset('img/products/13.png')}}" width="60" alt="" />
                      <div class="flex-1 ms-3">
                        <h6 class="mb-1 fw-semi-bold"><a class="text-dark stretched-link" href="#!">Reign Pro</a></h6>
                        <p class="fw-semi-bold mb-0 text-500">Agency</p>
                      </div>
                    </div>
                  </td>
                  <td class="align-middle text-end fw-semi-bold">$280</td>
                  <td class="align-middle pe-card">
                    <div class="d-flex align-items-center">
                      <div class="progress me-3 rounded-3 bg-200" style="height: 5px;width:80px">
                        <div class="progress-bar rounded-pill" role="progressbar" style="width: 8%;" aria-valuenow="8" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="fw-semi-bold ms-2">8%</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card-footer bg-light py-2">
          <div class="row flex-between-center">
            <div class="col-auto">
              <select class="form-select form-select-sm">
                <option>Last 7 days</option>
                <option>Last Month</option>
                <option>Last Year</option>
              </select>
            </div>
            <div class="col-auto"><a class="btn btn-sm btn-falcon-default" href="#!">View All</a></div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-6 ps-lg-2 mb-3">
      <div class="card h-lg-100">
        <div class="card-header">
          <div class="row flex-between-center">
            <div class="col-auto">
              <h6 class="mb-0">Total Sales</h6>
            </div>
            <div class="col-auto d-flex">
              <select class="form-select form-select-sm select-month me-2">
                <option value="0">January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
                <option value="4">May</option>
                <option value="5">Jun</option>
                <option value="6">July</option>
                <option value="7">August</option>
                <option value="8">September</option>
                <option value="9">October</option>
                <option value="10">November</option>
                <option value="11">December</option>
              </select>
              <div class="dropdown font-sans-serif btn-reveal-trigger">
                <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-total-sales" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-total-sales"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                  <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body h-100 pe-0">
          <!-- Find the JS file for the following chart at: src\js\charts\echarts\total-sales.js-->
          <!-- If you are not using gulp based workflow, you can find the transpiled code at: public\assets\js\theme.js-->
          <div class="echart-line-total-sales h-100" data-echart-responsive="true"></div>
        </div>
      </div>
    </div>

  </div>

  <div class="row g-0">

    <div class="col-xxl-6 px-xxl-2">
      <div class="card h-100">
        <div class="card-header bg-light py-2">
          <div class="row flex-between-center">
            <div class="col-auto">
              <h6 class="mb-0">Productos Top</h6>
            </div>

            <div class="col-auto d-flex"><a class="btn btn-link btn-sm me-2" href="#!">Ver Detalles</a>
              <div class="dropdown font-sans-serif btn-reveal-trigger">
                <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-top-products" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-top-products">
                  <a class="dropdown-item" href="#!">Ver</a>
                  <a class="dropdown-item" href="#!">Exportar</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item text-danger" href="#!">Remover</a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="card-body h-100">
          <!-- Find the JS file for the following chart at: src/js/charts/echarts/top-products.js-->
          <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js-->
          <div class="echart-bar-top-products h-100" data-echart-responsive="true"></div>
        </div>
      </div>
    </div>  
  </div>