-- Sql Queries

USE blood_bank;

-- (1)
-- To get the Information about all the Hospitals with having the blood component available.

-- SELECT   L.State, b.`Blood Bank Name`, b.`Blood Component Available` from location as L, `blood-availability` as b 
-- where L.`Blood Bank Name` = b.`Blood Bank Name` AND b.`Blood Component Available` = 'YES' ;


-- (2) 
-- Making a View to get the data for the nodal officers, with their designated Hostpitals names.

DROP VIEW IF EXISTS Nodal_with_Hospitals;
CREATE VIEW Nodal_with_Hospitals AS
SELECT N.`Nodal Officer` , B.`Blood Bank Name`, L.State
FROM `nodal officer` as N, `blood-banks` as B, location as L;
Select * from Nodal_with_Hospitals

-- (3)
-- To find the number of blood banks available in specific city

SELECT sum(State = 'Delhi' ) as DelCount FROM `location`

-- (4) 
-- Number of Blood Hospitals in Each State

SELECT  distinct(L.State), count(*) FROM `blood-availability` as B, location as L 
WHERE B.`Blood Component Available` = 'YES' AND
L.`Blood Bank Name` = B.`Blood Bank Name`
GROUP BY L.State
ORDER BY count(*) desc

-- (5) To get the License Number and contact details of Government Nodal officer in Delhi

SELECT N.`Nodal Officer`,K.`License #`,N.`Contact Nodal Officer`,N.Category FROM `nodal officer` as N, Location L, License K
WHERE L.State = 'Delhi' AND N.Category = 'Government'