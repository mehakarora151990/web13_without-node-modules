

$(function(){
    let inp_name = $('#name')
    let inp_age = $('#age')
    let inp_city = $('#city')
    let btn_submit = $('#submit')
    let tb_persons = $('#persons')

    function refreshpersonstable (persons){
        tb_persons.empty()
        tb_persons.append(
            `
            <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>CITY</th>
            </tr>
            `
            )

            for(person of persons){
                tb_persons.append(
                    `<tr>
                    <td>${person.name}</td>
                    <td>${person.age}</td>
                    <td>${person.city}</td>
                    </tr>
                    `
                )
            }
    }

    $.get('/api/persons', function(data){
        refreshpersonstable(data)
    })



    btn_submit.click(function(){
        console.log('button clicked')
    })
})