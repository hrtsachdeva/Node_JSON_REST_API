for api main file is users.js

Role - > manager/user/admin

Action type - > read ,write , delete

Resource - > attendance (assume only 1)


to read always send a GET request
to write always send a POST req.
to delete always send a DELETE req.



-------------------------------------------------------------------------------------------------------------------------

Get all users

-------------------------------------------------------------------------------------------------------------------------


/users/allusers      
this is the GET request to get the list of all users along with their role



-------------------------------------------------------------------------------------------------------------------------

Add role to the user


-------------------------------------------------------------------------------------------------------------------------


/users/adduser
this is the Post request to add a new role to the user 
input to this is a JSON
example
{
"name":"harshit",
"role":"admin"
}



-------------------------------------------------------------------------------------------------------------------------

Delete Role to the user

-------------------------------------------------------------------------------------------------------------------------

/users/deleteuser
this is the Post request to delete a  role to the user 
input to this is a JSON
example
{
"name":"harshit",
"role":"admin"
}



-------------------------------------------------------------------------------------------------------------------------


auth. api to know wether a user can read/write/delete a resource



-------------------------------------------------------------------------------------------------------------------------


to read a resource

-------------------------------------------------------------------------------------------------------------------------
/users/read
this is a GET request 
input to this is a JSON
example
{
"name":"harshit",
"resource":"attendance"
}
the output is a json and says you can read a file/ you cant read a file /error



-------------------------------------------------------------------------------------------------------------------------


to write a resource

-------------------------------------------------------------------------------------------------------------------------
/users/write
this is a POST request 
input to this is a JSON
example
{
"name":"harshit",
"resource":"attendance"
}
the output is a json and says you can write a file/ you cant write a file /

-------------------------------------------------------------------------------------------------------------------------


to delete a resource

-------------------------------------------------------------------------------------------------------------------------
/users/delete
this is a DELETE request 
input to this is a JSON
example
{
"name":"harshit",
"resource":"attendance"
}
the output is a json and says you can delete a file/ you cant delete a file /error



