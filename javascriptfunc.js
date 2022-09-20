<script>
  function generatePDF() 
  {
    var doc = new jsPDF();  //create jsPDF object
     doc.fromHTML(document.getElementById("test"), // page element which you want to print as PDF
      5,5, 
      {
        'width': 170//set width
      },
  function(a) 
   {
    doc.save("FacTech-Billing.pdf"); // save file name as HTML2PDF.pdf
  });
}

/*
  var doc = new jsPDF();
  var elementHTML = $('#contnet').html();
  var specialElementHandlers = 
  {
    '#elementH': function (element, renderer) 
    {
        return true;
    }
  };
  doc.fromHTML(elementHTML, 15, 15, 
    {
      'width': 170,
      'elementHandlers': specialElementHandlers
    }
  );

  / Save the PDF
  doc.save('sample-document.pdf');
*/
</script>