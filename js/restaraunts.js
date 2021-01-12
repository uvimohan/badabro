/* Default loading */
document.getElementById('submitContact').addEventListener('click', saveContact);
const server1Rating = 1;
const server2Rating = 1;
const server3Rating = 2;
const server4Rating = 2;
const server5Rating = 3;
const server6Rating = 3;
const server7Rating = 4;
const server8Rating = 4;
const server9Rating = 5;
const server10Rating = 5;

let customersData = localStorage.getItem("customers");
if(customersData == null) {
    let customersTmpData = {
        server1Customers: [],
        server2Customers: [],
        server3Customers: [],
        server4Customers: [],
        server5Customers: [],
        server6Customers: [],
        server7Customers: [],
        server8Customers: [],
        server9Customers: [],
        server10Customers: []
    }
    localStorage.setItem("customers", JSON.stringify(customersTmpData));
    customersData = customersTmpData;
} else {
    customersData = JSON.parse(customersData);
}

function saveContact() {
    let customerName    = document.getElementById('customerName').value;
    let customerRating  = document.getElementById('customerRating').value;
   
    if(customerName == ""){
        alert('Enter customer name');
        return false;
    }
    document.getElementById('customerName').value = '';
    var server1Customers = customersData.server1Customers;
    var server2Customers = customersData.server2Customers;
    var server3Customers = customersData.server3Customers;
    var server4Customers = customersData.server4Customers;
    var server5Customers = customersData.server5Customers;
    var server6Customers = customersData.server6Customers;
    var server7Customers = customersData.server7Customers;
    var server8Customers = customersData.server8Customers;
    var server9Customers = customersData.server9Customers;
    var server10Customers = customersData.server10Customers;

    if(customerRating <= 5) {
        server10Customers.unshift(customerName);
        server9Customers.unshift(customerName);
    }
    
    if(customerRating <= 4) {
        server8Customers.unshift(customerName);
        server7Customers.unshift(customerName);
    }
    
    if(customerRating <= 3) {
        server6Customers.unshift(customerName);
        server5Customers.unshift(customerName);
    }
    
    if(customerRating <= 2) {
        server4Customers.unshift(customerName);
        server3Customers.unshift(customerName);
    }
    
    if(customerRating <= 1) {
        server2Customers.unshift(customerName);
        server1Customers.unshift(customerName);
    }
    
    let customersTmpData = {
        server1Customers: server1Customers,
        server2Customers: server2Customers,
        server3Customers: server3Customers,
        server4Customers: server4Customers,
        server5Customers: server5Customers,
        server6Customers: server6Customers,
        server7Customers: server7Customers,
        server8Customers: server8Customers,
        server9Customers: server9Customers,
        server10Customers: server10Customers
    }
    localStorage.setItem("customers", JSON.stringify(customersTmpData));
    loadCustomerList();
}

function loadCustomerList() {
    let customersData   = localStorage.getItem("customers");
        customersData   = JSON.parse(customersData);        
    let totalLength     = 0;    
    for (let key in customersData) {
        if(totalLength < customersData[key].length) {
            totalLength = customersData[key].length;
        }            
    }

    if(totalLength > 0) {
        var tableRows = '';        
        for (let iLoop = 0; iLoop < totalLength; iLoop++) {
            let td10Data = (customersData['server10Customers'][iLoop] != undefined) ? customersData['server10Customers'][iLoop]: "";
            let td9Data = (customersData['server9Customers'][iLoop] != undefined) ? customersData['server9Customers'][iLoop]: "";
            let td8Data = (customersData['server8Customers'][iLoop] != undefined) ? customersData['server8Customers'][iLoop]: "";
            let td7Data = (customersData['server7Customers'][iLoop] != undefined) ? customersData['server7Customers'][iLoop]: "";
            let td6Data = (customersData['server6Customers'][iLoop] != undefined) ? customersData['server6Customers'][iLoop]: "";
            let td5Data = (customersData['server5Customers'][iLoop] != undefined) ? customersData['server5Customers'][iLoop]: "";
            let td4Data = (customersData['server4Customers'][iLoop] != undefined) ? customersData['server4Customers'][iLoop]: "";
            let td3Data = (customersData['server3Customers'][iLoop] != undefined) ? customersData['server3Customers'][iLoop]: "";
            let td2Data = (customersData['server2Customers'][iLoop] != undefined) ? customersData['server2Customers'][iLoop]: "";
            let td1Data = (customersData['server1Customers'][iLoop] != undefined) ? customersData['server1Customers'][iLoop]: "";

            tableRows += "<tr>";
                tableRows += "<td>" + td10Data + "</td>";
                tableRows += "<td>" + td9Data + "</td>";
                tableRows += "<td>" + td8Data + "</td>";
                tableRows += "<td>" + td7Data + "</td>";
                tableRows += "<td>" + td6Data + "</td>";
                tableRows += "<td>" + td5Data + "</td>";
                tableRows += "<td>" + td4Data + "</td>";
                tableRows += "<td>" + td3Data + "</td>";
                tableRows += "<td>" + td2Data + "</td>";
                tableRows += "<td>" + td1Data + "</td>";
            tableRows += "</tr>";
        }
        document.getElementById('customerAndServerTableBody').innerHTML = tableRows; 
    }   
}

loadCustomerList();