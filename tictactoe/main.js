const mutante =
{
  turno: 0,
}

const solido =
{
  arena: document.getElementById("tabuleiro"),
  casas: document.querySelectorAll(".casa"),
}

document.addEventListener( "click", function( event )
{
  if( event.target.id.substring( 0, 4 ) === "casa"
  && event.target.innerHTML === "" )
  {
    ////////////////////////////////////////////////////////////////////////////
    //
    if( mutante.turno % 2 === 0 ) event.target.innerHTML="X"
    else                          event.target.innerHTML="O"

    let key = null

    ////////////////////////////////////////////////////////////////////////////
    //
    if( solido.casas[0].innerHTML === solido.casas[4].innerHTML
    && solido.casas[4].innerHTML === solido.casas[8].innerHTML
    || solido.casas[2].innerHTML === solido.casas[4].innerHTML
    && solido.casas[4].innerHTML === solido.casas[6].innerHTML
    || solido.casas[3].innerHTML === solido.casas[4].innerHTML
    && solido.casas[4].innerHTML === solido.casas[5].innerHTML
    || solido.casas[1].innerHTML === solido.casas[4].innerHTML
    && solido.casas[4].innerHTML === solido.casas[7].innerHTML )
    {
      if( solido.casas[4].innerHTML !== "" ) key = solido.casas[4].innerHTML
    }

    else if( solido.casas[0].innerHTML === solido.casas[1].innerHTML
    && solido.casas[1].innerHTML === solido.casas[2].innerHTML
    || solido.casas[0].innerHTML === solido.casas[3].innerHTML
    && solido.casas[3].innerHTML === solido.casas[6].innerHTML )
    {
      if( solido.casas[0].innerHTML !== "" ) key = solido.casas[0].innerHTML
    }

    else if( solido.casas[2].innerHTML === solido.casas[5].innerHTML
    && solido.casas[5].innerHTML === solido.casas[8].innerHTML
    || solido.casas[6].innerHTML === solido.casas[7].innerHTML
    && solido.casas[7].innerHTML === solido.casas[8].innerHTML )
    {
      if( solido.casas[8].innerHTML !== "" ) key = solido.casas[8].innerHTML
    }

    else if( mutante.turno === 8 )
    {
      key = "empate"
    }

    ////////////////////////////////////////////////////////////////////////////
    //
    mutante.turno ++

    ////////////////////////////////////////////////////////////////////////////
    //
    if( key !== null )
    {
      if( key === "empate" ) alert( "Empate..." )
      else                   alert( key + " venceu!" )

      Array.from( solido.casas ).forEach( function( $ ){ $.innerHTML = "" } )

      mutante.turno = 0
    }
  }
}, false )