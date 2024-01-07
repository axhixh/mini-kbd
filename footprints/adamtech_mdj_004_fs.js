module.exports = {
  params: {
    designator: 'AdamTech-MDJ004FS',
    side: 'F',
    reverse: false,
    GND1: {type: 'net', value: 'GND1'},
    GND2: {type: 'net', value: 'GND2'},
    DATA: {type: 'net', value: 'DATA'},
    VCC: {type: 'net', value: 'VCC'}
  },

  body: p => {
    return `
      (footprint "AdamTech_MDJ-004-FS_reversible"
        (version 1)
        (generator "transformed by axhixh")
        (layer "F.Cu")
        (tags "Mini DIN 4 Pins Right Angle Female Socket Through-Hole Soldered")
        ${p.at /* parametric positioin */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 10 180) (layer "F.SilkS") ${p.ref_hide}
          (effects (font (size 0.6 0.6) (thickness 0.15) bold))
          (tstamp ddb29365-d455-4882-baed-bd725f2d63c3)
        )
        ${'' /* labels and instructions */}
        (fp_text value "MiniDIN4" (at 0 8.5 ${p.rot}) (layer "F.Fab")
          (effects (font (size 1 1) (thickness 0.15)))
          (tstamp d0b6f83f-b413-4e72-a965-9b3ef4b3e9c7)
        )
        (fp_text user "Mini DIN 4" (at 0 1 ${p.rot} unlocked) (layer "B.SilkS")
          (effects (font (size 0.6 0.6) (thickness 0.15)) (justify mirror))
          (tstamp 4ea88421-648b-43db-bd7c-3c727b273a71)
        )
        (fp_text user "on the OPPOSITE SIDE" (at 4.5 -2 ${p.rot} unlocked) (layer "B.SilkS")
          (effects (font (size 0.6 0.6) (thickness 0.15)) (justify left bottom mirror))
          (tstamp c68f6e04-4436-4fd4-8002-843b9914c69b)
        )
        (fp_text user "1) Place Component" (at 6 -4.25 ${p.rot} unlocked) (layer "B.SilkS")
          (effects (font (size 0.6 0.6) (thickness 0.15)) (justify left bottom mirror))
          (tstamp c830000b-8600-42e4-8bd6-bf23fcf6dd1c)
        )
        (fp_text user "2) Close JUMPER PADS" (at 6 -3 ${p.rot} unlocked) (layer "B.SilkS")
          (effects (font (size 0.6 0.6) (thickness 0.15)) (justify left bottom mirror))
          (tstamp fcfd7428-771e-47fc-91f7-6ff7671cd07b)
        )
        (fp_text user "Mini DIN 4" (at 0 1 ${p.rot} unlocked) (layer "F.SilkS")
          (effects (font (size 0.6 0.6) (thickness 0.15)))
          (tstamp 5589462d-a9f0-4a1f-bd04-95d06f627843)
        )
        (fp_text user "2) Close JUMPER PADS" (at -6 -3 ${p.rot} unlocked) (layer "F.SilkS")
          (effects (font (size 0.6 0.6) (thickness 0.15)) (justify left bottom))
          (tstamp 9b2ab108-a40d-4ee7-9e41-b739d149a04e)
        )
        (fp_text user "1) Place Component" (at -6 -4.25 ${p.rot} unlocked) (layer "F.SilkS")
          (effects (font (size 0.6 0.6) (thickness 0.15)) (justify left bottom))
          (tstamp cb2969f7-29ff-44a7-88df-c756d0100334)
        )
        (fp_text user "on the OPPOSITE SIDE" (at -4.5 -2 ${p.rot} unlocked) (layer "F.SilkS")
          (effects (font (size 0.6 0.6) (thickness 0.15)) (justify left bottom))
          (tstamp dcd59c87-2ea2-43cc-ac41-0cde1ba81310)
        )

        ${'' /* internal connections */}
        (fp_rect (start -7 -5.5) (end 7 7.45)
          (stroke (width 0.1) (type default)) (fill none) (layer "B.SilkS") 
          (tstamp 9da5688d-59a6-4d84-9ab0-798ac1999429))
        (fp_rect (start -7 -5.5) (end 7 7.45)
          (stroke (width 0.1) (type default)) (fill none) (layer "F.SilkS") 
          (tstamp 8baf82f3-9a88-4d21-8083-a3e9c22fc38b))
        (fp_circle (center 0 2) (end 0.125 2)
          (stroke (width 0.25) (type solid)) (fill none) (layer "B.Mask") 
          (tstamp 30e9bac6-d8b9-4053-bb34-397f015a1c73))
        (fp_circle (center 0 3.5) (end 0.125 3.5)
          (stroke (width 0.25) (type solid)) (fill none) (layer "B.Mask") 
          (tstamp 1e9be032-df4c-4050-bbae-93d5891a3b9f))
        (fp_circle (center 0 5) (end 0.125 5)
          (stroke (width 0.25) (type solid)) (fill none) (layer "B.Mask") 
          (tstamp 45e2b51a-eb53-45a4-9206-6ff0e71b50f6))
        (fp_circle (center 0 6.5) (end 0.125 6.5)
          (stroke (width 0.25) (type solid)) (fill none) (layer "B.Mask") 
          (tstamp 7d0a5cbe-5147-4a53-93c2-dc80e20119fe))
        (fp_poly
          (pts (xy -1.238 3.508) (xy -1.238 2.492) (xy -2.254 2.492) (xy -2.254 3.508))
          (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") 
          (tstamp 2a94a9ad-f39c-42b7-87cc-ad2f671136f3))
        (fp_poly
          (pts (xy -1.238 6.008) (xy -1.238 4.992) (xy -2.254 4.992) (xy -2.254 6.008))
          (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") 
          (tstamp 3b03c601-bc36-494e-9a6d-71eac7bfaa58))
        (fp_poly
          (pts (xy 1.23 4.984) (xy 1.23 6) (xy 2.246 6) (xy 2.246 4.984))
          (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") 
          (tstamp 5d103736-2652-419e-a25e-51855a0f8411))
        (fp_poly
          (pts (xy 1.238 2.492) (xy 1.238 3.508) (xy 2.254 3.508) (xy 2.254 2.492))
          (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") 
          (tstamp 4e85797e-fcb2-4d18-b354-ad7826269764))
        (fp_poly
          (pts (xy -1.238 3.508) (xy -1.238 2.492) (xy -2.254 2.492) (xy -2.254 3.508))
          (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") 
          (tstamp 14a109a6-0c65-4541-990e-5830ce4874be))
        (fp_poly
          (pts (xy -1.238 6.008) (xy -1.238 4.992) (xy -2.254 4.992) (xy -2.254 6.008))
          (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") 
          (tstamp 8f80b7e4-26a7-49f0-bc6b-cdd25b49d3fc))
        (fp_poly
          (pts (xy 1.23 4.984) (xy 1.23 6) (xy 2.246 6) (xy 2.246 4.984))
          (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") 
          (tstamp 7f34a1a6-d7fd-4279-a6bb-4259d237590f))
        (fp_poly
          (pts (xy 1.238 2.492) (xy 1.238 3.508) (xy 2.254 3.508) (xy 2.254 2.492))
          (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") 
          (tstamp 158700b1-0aac-4773-b9e0-7da9ffd731e5))
    
        (pad "" np_thru_hole circle (at -6.75 0) (size 2.2 2.2) (drill 2.2) (layers "F&B.Cu" "*.Mask") 
          (tstamp 24b715f1-c8a0-4194-98a2-0ddb38d0e3cc))
        (pad "" thru_hole circle (at -3.4 3) (size 1.4 1.4) (drill 0.9) (layers "*.Cu" "*.Mask") 
          (tstamp 3c6941fb-5493-4fd1-9c83-c3d163826e99))
        (pad "" thru_hole circle (at -3.4 5.5) (size 1.4 1.4) (drill 0.9) (layers "*.Cu" "*.Mask") 
          (tstamp 4e138e85-cda4-47b3-9f08-48748f385ca1))
        (pad "" smd custom (at -2.508 3 ${p.rot + 270}) (size 0.25 1) (layers "F.Cu")
          (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives) 
          (tstamp e66408b7-9fb2-4883-bd07-2ae5762db7b6))
        (pad "" smd custom (at -2.508 3 ${p.rot + 270}) (size 0.25 1) (layers "B.Cu")
          (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives) 
          (tstamp 4d6b54d8-b30e-48d9-bd1d-af5a5e68f599))
        (pad "" smd custom (at -2.508 5.5 ${p.rot + 270}) (size 0.25 1) (layers "F.Cu")
          (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives) 
          (tstamp d1a87de9-80fc-43ff-b9dd-11d9a543d4cc))
        (pad "" smd custom (at -2.508 5.5 ${p.rot + 270}) (size 0.25 1) (layers "B.Cu")
          (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives) 
          (tstamp e6afd7f8-df69-4de9-87db-b30b3ef41265))
        (pad "" smd custom (at -2 3 ${p.rot + 270}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
          (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly
              (pts (xy 0.6 0.4) (xy -0.6 0.4) (xy -0.6 0.2) (xy 0 -0.4) (xy 0.6 0.2))
              (width 0) (fill yes))) 
          (tstamp d6a10f7a-917c-4026-ac22-0edf017b76e1))
        (pad "" smd custom (at -2 3 ${p.rot + 270}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
          (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly
              (pts (xy 0.6 0.4) (xy -0.6 0.4) (xy -0.6 0.2) (xy 0 -0.4) (xy 0.6 0.2))
              (width 0) (fill yes))) 
          (tstamp 061e738b-9066-41ef-8b2e-5d1e60f68a84))
        (pad "" smd custom (at -2 5.5 ${p.rot + 270}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
          (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly
              (pts (xy 0.6 0.4) (xy -0.6 0.4) (xy -0.6 0.2) (xy 0 -0.4) (xy 0.6 0.2))
              (width 0) (fill yes))) 
          (tstamp 86e288c5-c6e8-469f-853e-cefe7fb3b1f8))
        (pad "" smd custom (at -2 5.5 ${p.rot + 270}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
          (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly
              (pts (xy 0.6 0.4) (xy -0.6 0.4) (xy -0.6 0.2) (xy 0 -0.4) (xy 0.6 0.2))
              (width 0) (fill yes))) 
          (tstamp c8b1121b-1874-4913-88b1-d70f85e2fb42))
        (pad "" np_thru_hole circle (at 0 -0.8) (size 2.2 2.2) (drill 2.2) (layers "F&B.Cu" "*.Mask") 
          (tstamp 4884549c-f8ee-4dc9-80ee-4bff8e562b6d))
        (pad "" smd custom (at 1.992 5.492 ${p.rot + 90}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
          (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly
              (pts (xy 0.6 0.4) (xy -0.6 0.4) (xy -0.6 0.2) (xy 0 -0.4) (xy 0.6 0.2))
              (width 0) (fill yes))) 
          (tstamp 779a5bfb-deb0-4e3f-b57d-55da2fd65470))
        (pad "" smd custom (at 1.992 5.492 ${p.rot + 90}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
          (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly
              (pts (xy 0.6 0.4) (xy -0.6 0.4) (xy -0.6 0.2) (xy 0 -0.4) (xy 0.6 0.2))
              (width 0) (fill yes))) 
          (tstamp d7119f7b-c68b-480f-933d-54a6f36a7c6c))
        (pad "" smd custom (at 2 3 ${p.rot + 90}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
          (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly
              (pts
                (xy 0.6 0.4)
                (xy -0.6 0.4)
                (xy -0.6 0.2)
                (xy 0 -0.4)
                (xy 0.6 0.2)
              )
              (width 0) (fill yes))
          ) (tstamp ef0e989c-d52f-4ce9-b92e-45f79cd6dec1))
        (pad "" smd custom (at 2 3 ${p.rot + 90}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
          (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly
              (pts
                (xy 0.6 0.4)
                (xy -0.6 0.4)
                (xy -0.6 0.2)
                (xy 0 -0.4)
                (xy 0.6 0.2)
              )
              (width 0) (fill yes))
          ) (tstamp fff9b024-8465-4048-9a62-b2d69b0a1979))
        (pad "" smd custom (at 2.5 5.492 ${p.rot + 90}) (size 0.25 1) (layers "F.Cu")
          (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
          ) (tstamp 121db234-3d9b-4ab0-8b0d-dc575ecdca50))
        (pad "" smd custom (at 2.5 5.492 ${p.rot + 90}) (size 0.25 1) (layers "B.Cu")
          (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
          ) (tstamp ea0fbae5-8bfa-4421-83ab-3a8558af0aa0))
        (pad "" smd custom (at 2.508 3 ${p.rot + 90}) (size 0.25 1) (layers "F.Cu")
          (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
          ) (tstamp ebe048a8-f0d4-49a7-b87f-ba82f18c0bda))
        (pad "" smd custom (at 2.508 3 ${p.rot + 90}) (size 0.25 1) (layers "B.Cu")
          (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
          ) (tstamp 074fb5f2-534e-4353-b557-8555c49e6fd6))
        (pad "" thru_hole circle (at 3.4 3) (size 1.4 1.4) (drill 0.9) (layers "*.Cu" "*.Mask") (tstamp bc7a7eb9-a5bb-4f5d-9446-68eb7b7fcd79))
        (pad "" thru_hole circle (at 3.4 5.5) (size 1.4 1.4) (drill 0.9) (layers "*.Cu" "*.Mask") (tstamp a67ccfeb-410b-41f0-a8ff-b76d3c364526))
        (pad "" np_thru_hole circle (at 6.75 0) (size 2.2 2.2) (drill 2.2) (layers "F&B.Cu" "*.Mask") (tstamp d6193a6d-b879-4339-b57f-aca87bcff584))
        (pad "3" smd custom (at -0.984 3 ${p.rot}) (size 0.25 0.25) (layers "B.Cu")
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 0.984 -1) (width 0.25))
          ) (tstamp 1d200582-cccb-40f1-98b1-c0007cab1486))
        (pad "3" smd custom (at -0.984 3 ${p.rot + 270}) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
          (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly
              (pts
                (xy 0.6 0)
                (xy -0.6 0)
                (xy -0.6 1)
                (xy 0 0.4)
                (xy 0.6 1)
              )
              (width 0) (fill yes))
          ) (tstamp 0b84460a-dd80-491f-92f7-a46ef79b0267))
        (pad "3" thru_hole circle (at 0 2 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") ${p.GND1.str}
        (tstamp bdf62313-674b-4582-97e2-dff655f4f655))
        (pad "3" smd custom (at 0.984 3 ${p.rot + 180}) (size 0.25 0.25) (layers "F.Cu")
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 0.984 1) (width 0.25))
          ) (tstamp 57a2b04e-f604-4f1e-8098-c8505a051a45))
        (pad "3" smd custom (at 0.984 3 ${p.rot + 90}) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
          (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly
              (pts
                (xy 0.6 0)
                (xy -0.6 0)
                (xy -0.6 1)
                (xy 0 0.4)
                (xy 0.6 1)
              )
              (width 0) (fill yes))
          ) (tstamp 423c5f38-0455-4d23-849b-63c1f2e7ec41))
        (pad "5" smd custom (at -0.984 3 ${p.rot}) (size 0.25 0.25) (layers "F.Cu")
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 0.976 0.492) (width 0.25))
          ) (tstamp 925442b2-454b-42de-bff4-6cb84098a8ef))
        (pad "5" smd custom (at -0.984 3 ${p.rot + 270}) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
          (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly
              (pts
                (xy 0.6 0)
                (xy -0.6 0)
                (xy -0.6 1)
                (xy 0 0.4)
                (xy 0.6 1)
              )
              (width 0) (fill yes))
          ) (tstamp bf2aadc8-c636-4390-a51f-a4dcbd2eab0f))
        (pad "5" thru_hole circle (at 0 3.5 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") ${p.GND2.str} 
        (tstamp fdcfcda6-aed8-41f7-af8d-dcef99c7fc8d))
        (pad "5" smd custom (at 0.984 3 ${p.rot + 180}) (size 0.25 0.25) (layers "B.Cu")
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 0.984 -0.5) (width 0.25))
          ) (tstamp e90e228b-71e2-4114-a099-8f4b03aa34dd))
        (pad "5" smd custom (at 0.984 3 ${p.rot + 90}) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
          (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly
              (pts
                (xy 0.6 0)
                (xy -0.6 0)
                (xy -0.6 1)
                (xy 0 0.4)
                (xy 0.6 1)
              )
              (width 0) (fill yes))
          ) (tstamp e2db7b57-2cf7-4f38-bb50-835d2aaa7206))
        (pad "6" smd custom (at -0.984 5.5 ${p.rot}) (size 0.25 0.25) (layers "B.Cu")
          (zone_connect 0)      
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 0.984 -0.5) (width 0.25))
          ) (tstamp 4445c4c3-1c35-4ef8-9ee3-42a9dbe8b8e8))
        (pad "6" smd custom (at -0.984 5.5 ${p.rot + 270}) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
          (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly
              (pts
                (xy 0.6 0)
                (xy -0.6 0)
                (xy -0.6 1)
                (xy 0 0.4)
                (xy 0.6 1)
              )
              (width 0) (fill yes))
          ) (tstamp 839a67c4-56f6-4304-b74b-5e6991930a61))
        (pad "6" thru_hole circle (at 0 5 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") ${p.VCC.str}
        (tstamp efca7c13-532c-4677-85f2-83fc98688506))
        (pad "6" smd custom (at 0.976 5.492 ${p.rot + 180}) (size 0.25 0.25) (layers "F.Cu")
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 0.976 0.492) (width 0.25))
          ) (tstamp 3a0dbfad-c6f9-42c6-94fd-c49f3bfa0de7))
        (pad "6" smd custom (at 0.976 5.492 ${p.rot + 90}) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
          (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly
              (pts
                (xy 0.6 0)
                (xy -0.6 0)
                (xy -0.6 1)
                (xy 0 0.4)
                (xy 0.6 1)
              )
              (width 0) (fill yes))
          ) (tstamp fbf76062-68fc-4435-a072-54a95b462e5b))
        (pad "8" smd custom (at -0.984 5.5 ${p.rot}) (size 0.25 0.25) (layers "F.Cu")
          (zone_connect 0)
          (options (clearance outline) (anchor circle))      
          (primitives
            (gr_line (start 0 0) (end 0.984 1) (width 0.25))
          ) (tstamp 234b05a7-b91a-4fc9-8714-2077070ecee3))
        (pad "8" smd custom (at -0.984 5.5 ${p.rot + 270}) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
          (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly
              (pts
                (xy 0.6 0)
                (xy -0.6 0)
                (xy -0.6 1)
                (xy 0 0.4)
                (xy 0.6 1)
              )
              (width 0) (fill yes))
          ) (tstamp fa17f091-d916-46e3-afb1-bf5622b6380d))
        (pad "8" thru_hole circle (at 0 6.5 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") ${p.DATA.str}
        (tstamp 10dd605c-98bb-4daa-858c-66a3418ba89e))
        (pad "8" smd custom (at 0.976 5.492 ${p.rot + 180}) (size 0.25 0.25) (layers "B.Cu")      
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 0.984 -1) (width 0.25))
          ) (tstamp 62c60bb2-2998-471f-950e-9d5927afc0ec))
        (pad "8" smd custom (at 0.976 5.492 ${p.rot + 90}) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
          (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly
              (pts
                (xy 0.6 0)
                (xy -0.6 0)
                (xy -0.6 1)
                (xy 0 0.4)
                (xy 0.6 1)
              )
              (width 0) (fill yes))) 
          (tstamp 6091d304-7915-445d-8e3e-1c2f9ef2938c)))`
  }
}
