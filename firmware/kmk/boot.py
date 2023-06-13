import board
import digitalio
import storage

reset_pin = digitalio.DigitalInOut(board.GP2)
reset_pin.pull = digitalio.Pull.UP
if reset_pin.value:
    storage.disable_usb_drive()