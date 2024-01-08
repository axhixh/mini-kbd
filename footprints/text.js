// Author: @infused-kim
//
// Description:
// Allows oyu to place text on the PCB.
//
// axhixh: updated to support different sizes

module.exports = {
  params: {
    designator: 'TXT',
    side: 'F',
    reverse: false,
    text: 'Awesomeness',
    height: 1,
    width: 1
  },
  body: p => {
    const front = `
      (gr_text "${p.text}" ${p.at} (layer F.SilkS)
        (effects (font (size ${p.height} ${p.width}) (thickness 0.15)))
      )
    `
    const back = `
      (gr_text "${p.text}" ${p.at} (layer B.SilkS)
        (effects (font (size ${p.height} ${p.width}) (thickness 0.15)) (justify mirror))
      )
    `

    let final = '';

    if(p.side == "F" || p.reverse) {
      final += front;
    }
    if(p.side == "B" || p.reverse) {
      final += back;
    }

    return final;
  }
}
