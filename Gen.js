history.pushState(null, null, location.href);
window.onpopstate = function(event) {
    history.go(1);
};
var IsAlreadyAdded = false, IsChangeSurname, IsStudentHaveGoodMark;
var marks = 0;
var Checker = 0;


$('#SendForm').on("submit", function(event) {
    var Marks = document.getElementById('Count_Marks').value;
    var BadTruancy = document.getElementById('BadTrusarycell').value;
    var SumofMarks = 0;
    var MassivCellMarks=[];
    for (let index = 0; index < Marks; index++) {
        
        MassivCellMarks[index] = document.getElementById('Mark'+index).value;
        SumofMarks += MassivCellMarks[index];
    }
    for (let index = 0; index < MassivCellMarks.length; index++) {
        if(MassivCellMarks[index] == null || MassivCellMarks[index] == "")
        {
            event.preventDefault();
            alert("Одно или несколько полей пусты");
            return;
        }
    }
    if(SumofMarks % Marks < 4 && BadTruancy < 10)
    {
        IsStudentHaveGoodMark = true;
    }
    if(IsStudentHaveGoodMark)
    {
        if (confirm("Зачёт получен. Отправить данные?"))
        {
            return true;
        }
        else
        {
            event.preventDefault();
            alert("Данные не отправлены");
            return;
        }
    }
    else
    {
        if (confirm("Зачёт не получен. Отправить данные?"))
        {
            return true;
        }
        else
        {
            event.preventDefault();
            alert("Данные не отправлены");
            return;
        }
    }
});

function ChecksMarksBeforeUpload()
{
    
}

function CheckForSymbols_OnMarksField() {
    var e = event || window.event;
    var key = e.keyCode || e.which;

    if (key < 48 || key > 57) {
        
        if (e.preventDefault) e.preventDefault(); 
        e.returnValue = false;
    }
}
function CheckForSymbols_OnMarksDBField() {
    var e = event || window.event;  
    var key = e.keyCode || e.which; 

    if (key < 48 || key > 53) { 
        
        if (e.preventDefault) e.preventDefault(); 
        e.returnValue = false; 
    }
}

function Check_stroks_OnStart()
{
    var lesson = document.getElementById('Lesson').value;
    var Marks_count = document.getElementById('Count_Marks').value;
    var surname = document.getElementById('Surname').value;
    if(lesson == null || lesson == "")
    {
        alert("Не введён предмет");
        return;
    }
    if(surname == null || surname == "")
    {
        alert("Не введёна фамилия");
        return;
    }
    if(Marks_count == null || Marks_count == "")
    {
        alert("Не введено количество оценок");
        return;
    }
    var Checker = 0;
    for (let index = 0; index < AllLessonsForCheck.length; index++) 
    {
        if(AllLessonsForCheck[index] != lesson)
        {
            Checker++;
        }
    }
    if(Checker == AllLessonsForCheck.length)
    {
        alert("Урока \""+ lesson +"\" нет в базе данных");
        return;
    }
    Checker = 0;
    for (let index = 0; index < AllSurnamesForCheck.length; index++) 
    {
        if(AllSurnamesForCheck[index] != surname)
        {
            Checker++;
        }
    }
    if(Checker == AllSurnamesForCheck.length)
    {
        alert("Фамилии \""+ surname +"\" нет в базе данных");
        return;
    }
    else
    {
        if(document.getElementById('InnerTable'))
        {
            document.getElementById('InnerTable').parentNode.removeChild(document.getElementById('InnerTable'));
        }
        if(document.getElementById('divBtnSendMarks'))
        {
            document.getElementById('divBtnSendMarks').parentNode.removeChild(document.getElementById('divBtnSendMarks'));
        }
        Add_Marks();
        return;
        
    }

}
function Add_Marks()
{
    var FormforAllMarks = document.getElementById('AllMarks');
    if(document.getElementById("DeleteInfo"))
    {
        document.getElementById("DeleteInfo").remove();
    }
    var lesson = document.getElementById('Lesson').value;
    var Marks_count = document.getElementById('Count_Marks').value;
    var surname = document.getElementById('Surname').value;

    FormforAllMarks.innerHTML = '<h5 name="Default_Text" class="Start_Text">Предмет: <b>'+lesson+
    '</b>; Количество оценок <b>'+Marks_count+'</b>; Фамилия <b>'+surname+'</b>;</h5>';

    FormforAllMarks.innerHTML += '<div style="display:none"><input id="LessonPlace" name="LessonPlace" style="display:none" value="'+lesson+'"></input></div>';
    FormforAllMarks.innerHTML += '<div style="display:none"><input id="MarksPlace" name="MarksPlace" style="display:none" value="'+Marks_count+'"></input></div>';
    FormforAllMarks.innerHTML += '<div style="display:none"><input id="SurnamePlace" name="SurnamePlace" style="display:none" value="'+surname+'"></input></div>';

    FormforAllMarks.innerHTML += '<div class="Grid-table" id="ChangedTable"></div>';
    var div = document.getElementById('ChangedTable');
    
        
        for (var index = 0; index < Marks_count; index++) 
        {
            var nextin = index+1;
            div.innerHTML +='<div class="cell" id="cell'+index+'">'+
                                '<label for="exampleInputEmail1" class="form-label">Оценка №'+nextin+'</label>'+
                                '<input type="text" class="form-control" id="Mark'+index+'" name="Mark'+index+'"'+
                                    'placeholder="Оценка в этот день" maxlength="1" onKeyPress="CheckForSymbols_OnMarksDBField()" aria-describedby="emailHelp">'+
                            '</div>';
        }

        FormforAllMarks.innerHTML +=  '<h5 class="Start_Text" style="margin-top: 1%">Неуважительные и уважительные пропуски</h5>';

        FormforAllMarks.innerHTML +=  '<div id="TrusaryMarksCells" class="Trusary-table"></div>';

            var TrusaryMarksCells = document.getElementById('TrusaryMarksCells');
            TrusaryMarksCells.innerHTML += '<div class="cell" id="GoodTrusary">'+
                    '<label for="exampleInputEmail1" class="form-label">Уважительная прогулов</label>'+
                    '<input type="text" class="form-control" id="GoodTrusarycell" name="GoodTrusarycell"'+
                        'placeholder="Оценка в этот день" maxlength="2" onKeyPress="CheckForSymbols_OnMarksField()" aria-describedby="emailHelp">'+
                '</div>';
            TrusaryMarksCells.innerHTML += '<div class="cell" id="BadTrusary">'+
                '<label for="exampleInputEmail1" class="form-label">Неуважительных прогулов</label>'+
                '<input type="text" class="form-control" id="BadTrusarycell" name="BadTrusarycell"'+
                    'placeholder="Оценка в этот день" maxlength="2" onKeyPress="CheckForSymbols_OnMarksField()" aria-describedby="emailHelp">'+
            '</div>';
        FormforAllMarks.innerHTML +=   '<div id="divBtnSendMarks" class="TableButton"><button type="submit" id="StartCountingMarks" name="StartCountingMarks" class="btn btn-primary" id="StartCountingMarks" style="margin-top: 5%;">Подтвердить оценки</button></div>';
    //Main.innerHTML +=   '<div id="divBtnSendMarks" class="TableButton"><button type="submit" id="StartCountingMarks" name="StartCountingMarks" class="btn btn-primary" id="StartCountingMarks" onclick="CheckBeforeUpload()" style="margin-top: 5%;">Подтвердить оценки</button>';
}
