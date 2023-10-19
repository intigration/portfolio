import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _imports_0 = "/assets/micropython-mu.09415c8f.png";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "MicroPython", "meta": [{ "property": "og:title", "content": "MicroPython" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>MicroPython - Python for microcontrollers</h1><p><a href="https://micropython.org/">MicroPython</a> is a special light implementation of Python 3 that includes a small subset of the Python standard library and is optimized to run on microcontrollers.</p><p>You can use MicroPython on various boards such as:</p><ul><li>BBC micro:bit (<a href="https://www.microbit.co.uk/">webpage</a>)</li><li>Boards with the ESP8266 chip (<a href="http://www.esp8266.com/wiki/doku.php?id=esp8266-module-family">various boards wiki</a>)</li><li>MicroPython pyboard (<a href="https://micropython.org/store/#/store">store</a>)</li><li>WiPy (<a href="https://www.pycom.io/solutions/py-boards/wipy/">webpage</a>)</li></ul><p>Each device mentioned above has its own way of controlling and uploading content. Some of them will be described in the following chapters.</p><h2>MicroPython in Fedora</h2><p>If you want to try MicroPython and learn about the differences between MicroPython and Python, install MicroPython with a command</p><pre><code>$ sudo dnf install micropython
</code></pre><p>and then start an interactive MicroPython session.</p><pre><code>$ micropython
MicroPython v1.12 on 2020-04-15; linux version
Use Ctrl-D to exit, Ctrl-E for paste mode
&gt;&gt;&gt;
</code></pre><p>Using MicroPython on your computer makes sense only for some basic testing purposes. Its main goal is to control embedded devices.</p><h2>Mu - simple IDE for BBC micro:bit</h2><p>Micro:bit tries to be as simple to use as possible, so its developers decided to make their own IDE named <em>Mu</em>. <em>Mu</em> is designed for beginners to learn the basics of programming. When coding in <em>Mu</em>, you only need one click to flash (upload) your app to your micro:bit or to start the REPL, an interactive Python session. Your device is mounted automatically in Fedora.</p><p><em>Mu</em> is a part of Fedora, so you can install it with:</p><pre><code>$ sudo dnf install mu
</code></pre><p>and then you can run your new IDE from a terminal or from the apps menu.</p><pre><code>$ mu
</code></pre><p><em>Mu</em> looks like this:</p><img${ssrRenderAttr("src", _imports_0)} width="97%"><h2>uFlash - CLI for flashing the micro:bit</h2><p>If you prefer to use your own text editor instead of <em>Mu</em>, <em>uFlash</em> is the right utility for you. <em>uFlash</em> is a command line tool (written in Python) for flashing your Python scripts to Micro:bit.</p><p>To install it, type</p><pre><code>$ sudo dnf install uflash
</code></pre><p>The next step is to flash your script to Micro:bit. Just use the path to the script as the first parameter for <code>uflash</code>.</p><pre><code>$ uflash ./hello_world.py
</code></pre><h2>Esptool - CLI for flashing boards with the ESP8266/ESP32 chip</h2><p>If you want to control your ESP8266/ESP32 device using MicroPython, write MicroPython firmware into the flash memory of your device.</p><p>You can download MicroPython firmware from <a href="http://micropython.org/download/">the download section of its web page</a>. Choose the latest one suitable for your device. The download page includes detailed (but not Fedora-specific) information. If you run into problems, use the tutorials it links to.</p><p><code>esptool</code> is a handy CLI application that helps you flash your device. To install it, type</p><pre><code>$ sudo dnf install esptool
</code></pre><p>With the firmware downloaded and <code>esptool</code> installed, you need to know the last thing to connect and flash your device - the device\u2019s name. You can find it in the result of the <code>dmesg</code> command. Use <code>dmesg</code> with <code>tail</code> to obtain the last ten lines of the <code>dmesg</code> output.</p><pre><code>$ dmesg | tail
[703169.886296] ch341 1-1.1:1.0: device disconnected
[703176.972781] usb 1-1.1: new full-speed USB device number 45 using ehci-pci
[703177.059448] usb 1-1.1: New USB device found, idVendor=1a86, idProduct=7523
[703177.059454] usb 1-1.1: New USB device strings: Mfr=0, Product=2, SerialNumber=0
[703177.059457] usb 1-1.1: Product: USB2.0-Serial
[703177.060474] ch341 1-1.1:1.0: ch341-uart converter detected
[703177.062781] usb 1-1.1: ch341-uart converter now attached to **ttyUSB0**
</code></pre><p>The name of your device starts with <em>tty</em>.</p><p>You also need the rights to access your device. You can use <code>sudo</code> before any <code>esptool</code> and <code>picocom</code> commands mentioned below, but the preferred and more secure way is to add your regular user account to a special system group <em>dialout</em>. To do it, type</p><pre><code>$ sudo usermod -a -G dialout &lt;username&gt;
</code></pre><p>It is necessary to logout and login for this change to take effect. Alternatively, re-login with the command <code>su - $(whoami)</code>, but note that this will only affect the your current console session.</p><p>Use <code>esptool</code> to flash your device. It is suggested to erase the flash memory before writing new firmware. To do it, type the following and do not forget to replace <code>ttyUSB0</code> with the name of your device.</p><pre><code>$ esptool --port /dev/ttyUSB0 erase_flash
esptool.py v1.1
Connecting...
Erasing flash (this may take a while)...
</code></pre><p>And now you can write MicroPython firmware to empty the flash memory. Again, do not forget to replace <code>ttyUSB0</code> with the name of your device.</p><p>For an ESP8266:</p><pre><code>$ esptool --port /dev/ttyUSB0 --baud 115200 write_flash --flash_size=detect 0 esp8266-20200911-v1.13.bin
esptool.py v1.1
Connecting...
Running Cesanta flasher stub...
Flash params set to 0x0020
Writing 565248 @ 0x0... 565248 (100 %)
Wrote 565248 bytes at 0x0 in 49.0 seconds (92.3 kbit/s)...
Leaving...
</code></pre><p>For an ESP32, the command is slightly different:</p><pre><code>$ esptool.py --chip esp32 --port /dev/ttyUSB0 --baud 460800 write_flash -z 0x1000 esp32-idf3-20200902-v1.13.bin
</code></pre><p>You might need to change the name of your device and the name of the binary file with firmware, and some devices require a different <code>--flash_mode</code> setting \u2013 see <code>esptool write_flash --help</code> for the options. Other parameters such as a baud-rate (connection speed) should be OK in most cases.</p><h2>Picocom - minimal terminal emulation program</h2><p>A lot of microcontrollers (like those with the ESP8266/ESP32 chip) provide a serial console for communication with the outer world. Fedora provides a minimalistic and handy tool for connecting to it - <code>picocom</code>.</p><p>To install it, type</p><pre><code>$ sudo dnf install picocom
</code></pre><p>To use it, type the following (and do not forget to replace <code>ttyUSB0</code> with the name of your device).</p><pre><code>$ picocom -b 115200 /dev/ttyUSB0
picocom v1.7

port is        : /dev/ttyUSB0
flowcontrol    : none
baudrate is    : 115200
parity is      : none
databits are   : 8
escape is      : C-a
local echo is  : no
noinit is      : no
noreset is     : no
nolock is      : no
send_cmd is    : sz -vv
receive_cmd is : rz -vv
imap is        : 
omap is        : 
emap is        : crcrlf,delbs,

Terminal ready

&gt;&gt;&gt;
</code></pre><p>The <code>-b</code> parameter sets the baud-rate to 115200 bps, MicroPython\u2019s default connection speed on these devices.</p><p>The last line of the output (the one with <code>&gt;&gt;&gt;</code>) means that MicroPython on your device is ready to be used. If you do not see the last line, press <em>Enter</em> on your keyboard. If you still do not see the prompt, press RESET on your device.</p><pre><code>&gt;&gt;&gt; print(&#39;Let the connecting to IoT begin!&#39;)
Let the connecting to IoT begin!
&gt;&gt;&gt;
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/python/micropython.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
