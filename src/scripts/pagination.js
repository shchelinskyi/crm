const itemsPerPage = 8;
let currentPage = 1;
let filteredCustomers = [...customers];

const searchInput = document.querySelector(".content__input");

searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filterData = customers.filter(item => item.name.toLowerCase().includes(searchValue));
    currentPage = 1;
    filteredCustomers = [...filterData];
    createPaginationButtons();
})

const getStatusButtonClass = (status) => status === "Active" ? "status-button--active" : "status-button--inactive";

function displayData(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedData =  filteredCustomers.slice(startIndex, endIndex);

    const tableContent = document.querySelector('.table__content');
    tableContent.innerHTML = '';

    slicedData.forEach(customer => {
        const buttonClass = getStatusButtonClass(customer.status);
        const tableItem = document.createElement('div');

        tableItem.innerHTML = `
        <div class="table__item">
                        <div class="table__block">
                            <div class="table__cell">
                            <span class="table__cell-label">Name: </span>
                                ${customer.name}
                            </div>
                            <div class="table__cell">
                             <span class="table__cell-label">Company: </span>
                                  ${customer.company}
                            </div>
                            <div class="table__cell">
                              <span class="table__cell-label">Phone: </span>
                                ${customer.phone}
                            </div>
                            <div class="table__cell">
                                 <span class="table__cell-label">Email: </span>
                               ${customer.email}
                            </div>
                            <div class="table__cell">
                                  <span class="table__cell-label">Country: </span>
                                ${customer.country}
                            </div>
                            <div class="table__cell table__cell--center">
                             <span class="table__cell-label">Status: </span>
                             <button id="${customer.id}" class="status-button ${buttonClass}">${customer.status}</button>
                            </div>
                        </div>
                        <div class="table__line"></div>
                    </div>`

        const btnStatus  = tableItem.querySelector('.status-button');
        btnStatus.addEventListener("click", (e) => {
            const currentIdx= customers.findIndex(item => item.id === e.target.id);
            if (e.target.textContent === "Active") {
                customers[currentIdx] ={...customers[currentIdx], status: "Inactive"}
                filteredCustomers=[...customers]
                displayData(currentPage);
            } else {
                customers[currentIdx] ={...customers[currentIdx], status: "Active"}
                filteredCustomers=[...customers]
                displayData(currentPage);
            }
        })
        tableContent.appendChild(tableItem);
    });
}

function createPaginationButtons() {

    const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
    const tableData = document.querySelector(".table__data");

    const paginationContainer = document.querySelector('.pagination-container');
    paginationContainer.innerHTML = '';

    const paginationList = document.createElement('ul');
    paginationList.className = 'pagination';

    let startPage;
    let endPage;

    const prevLi = document.createElement('li');
    const prevButton = document.createElement('button');
    prevButton.textContent = '<';
    prevButton.classList.add('pagination-btn');
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage -= 1;
            createPaginationButtons();
        }
    });
    prevLi.appendChild(prevButton);
    paginationList.appendChild(prevLi);

    if (currentPage <= 3) {
        startPage = 1;
        endPage = Math.min(totalPages, 4);
    } else if (currentPage >= totalPages - 2) {
        startPage = Math.max(1, totalPages - 4);
        endPage = totalPages;
    } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
    }

    if (startPage > 1) {
        const firstLi = document.createElement('li');
        const firstButton = document.createElement('button');
        firstButton.textContent = '1';
        firstButton.classList.add('pagination-btn');
        firstButton.addEventListener('click', () => {
            currentPage = 1;
            createPaginationButtons();
        });
        firstLi.appendChild(firstButton);
        paginationList.appendChild(firstLi);

        if (startPage > 2) {
            const moreLiStart = document.createElement('li');
            const moreItemStart = document.createElement('button');
            moreItemStart.textContent = '...';
            moreItemStart.classList.add('pagination-btn');
            moreItemStart.setAttribute('disabled', true);
            moreLiStart.appendChild(moreItemStart);
            paginationList.appendChild(moreLiStart);
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('pagination-btn');

        if (i === currentPage) {
            button.classList.add('pagination-btn--active');
            if (filteredCustomers.length >= 8) {
                const dataTo = 8 * currentPage ;
                const fullDataTo = dataTo > filteredCustomers.length ? filteredCustomers.length : dataTo;
                const dataFrom = fullDataTo -7 ;
                tableData.textContent = `Showing data ${dataFrom} to ${fullDataTo} of  ${filteredCustomers.length} entries`
            } else {
                tableData.textContent = `Showing data  ${filteredCustomers.length} of  ${filteredCustomers.length} entries`
            }

        }
        button.addEventListener('click', () => {
            currentPage = i;
            createPaginationButtons();
        });

        li.appendChild(button);
        paginationList.appendChild(li);
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const moreLiEnd = document.createElement('li');
            const moreItemEnd = document.createElement('button');
            moreItemEnd.textContent = '...';
            moreItemEnd.classList.add('pagination-btn');
            moreItemEnd.setAttribute('disabled', true);
            moreLiEnd.appendChild(moreItemEnd);
            paginationList.appendChild(moreLiEnd);
        }

        const lastLi = document.createElement('li');
        const lastButton = document.createElement('button');
        lastButton.textContent = totalPages;
        lastButton.classList.add('pagination-btn');
        lastButton.addEventListener('click', () => {
            currentPage = totalPages;
            createPaginationButtons();
        });
        lastLi.appendChild(lastButton);
        paginationList.appendChild(lastLi);
    }

    const nextLi = document.createElement('li');
    const nextButton = document.createElement('button');
    nextButton.textContent = '>';
    nextButton.classList.add('pagination-btn');
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage += 1;
            createPaginationButtons();
        }
    });
    nextLi.appendChild(nextButton);
    paginationList.appendChild(nextLi);

    paginationContainer.appendChild(paginationList);

    displayData(currentPage);
};


createPaginationButtons();



