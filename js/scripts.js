
const users=[
    [1, 'Michael', 'Smith', 'Resource'],
    [2,	'Jennifer', 'Johnson', 'Resource'],
    [3,	'Jessica', 'Williams',	'Resource'],
    [4,	'David', 'Jones','General Manager'],
    [5,	'James', 'Brown', 'Resource'],
    [6,	'Christopher', 'Garcia', 'Resource'],
    [7,	'Matthew', 'Miller', 'Project manager'],
    [8,	'Joshua', 'Davis', 'Project manager'],
    [9,	'Ashley', 'Rodriguez', 'Project manager'],
    [10,'Sarah', 'Martinez', 'Project manager'],
    [11,'Stephanie', 'Hernandez', 'Project manager'],
    [12,'Melissa', 'Lopez', 'Resource'],
    [13,'Nicholas', 'Gonzalez', 'Resource'],
    [14,'Amanda', 'Wilson', 'Resource'],
    [15,'Andrew', 'Anderson', 'Resource'],
    [16,'Brandon', 'Thomas', 'Resource'],
    [17,'Stephanie', 'Taylor', 'Resource'],
    [18,'Kelly', 'Moore', 'Resource'],
    [19,'Daniel', 'Jackson', 'Resource'],
    [20,'Megan', 'Martin', 'Resource']
]
const btn = document.getElementById("btnusers");






btn.addEventListener("click",function(){
  alert(users);
});


$(function(){
    $('#loginText').click(function(){
        $('#loginModal').modal('show');
    });
});
