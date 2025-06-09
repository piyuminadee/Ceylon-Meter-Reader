## Requirement
The Ceylon electricity board requires a system to store meter reading data and let customers check their last bill with a breakdown of the charges. The initial customer creation is provided and the customer 
registration process is not expected to be implemented at this stage

## Meter Reader Functionalities:

- The meter reader shall view an interface to add customer meter reading. The meter reader shall select the customer, enter the new meter reading, and submit the record. This information will be used to calculate the customer’s bill. The system shall show an error if the new reading is less than the previous reading.

- The meter reader can optionally allow the meter readers to add records for existing customers.

## Customer Functionalities:

- Customers will be given a public interface that can be used to check their final generated bill as well as a breakdown of the bill by entering the account number & submit. Only the latest details for the customer are expected to be shown.

- Once a customer has entered the account number, a output display should be available for the following details:
- Previous reading date

          Present reading date with new reading data
          Previous reading
          Present reading
          Fixed charge amount
          Total unit used
          1st range total amount
          2nd range total amount
          3rd range total amount
          Total bill amount

## The calculation formula of the bill

Unit Range	          Fixed Charge	  Per Unit Charge <br>
First Range	               500 LKR	       20 LKR <br>
Second Range	             1500 LKR	       35 LKR<br>
Third Range	               -	             50 LKR<br>
