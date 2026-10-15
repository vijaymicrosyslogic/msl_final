// Centralized Training Programs Data for MicroSysLogic
// Source: MicroSysLogic Training Programs PPTX

export const TRAINING_PROGRAMS = [
  {
    id: 'program-1',
    slug: 'advanced-embedded-iot',
    number: '01',
    title: 'Advanced Embedded IoT Program',
    badge: 'FLAGSHIP COMPREHENSIVE',
    subtitle: 'Master Embedded Hardware, ARM Cortex, Linux & IoT from Silicon to System',
    duration: '50 Hours',
    durationHours: 50,
    mode: 'Hybrid (Online + Lab)',
    level: 'Beginner to Advanced',
    certification: 'MicroSysLogic Certified',
    image: '/assets/img/training/embedded_training.jpg',
    hardware: 'STM32 & Raspberry Pi',
    hardwareList: ['STM32 ARM Cortex', 'Raspberry Pi SoC', 'CAN Bus Module', 'I2C / SPI Sensors', 'OmniVision Camera'],
    theoryHours: '27 Hours',
    practicalHours: '23 Hours',
    summary: 'A 50-hour flagship masterclass covering processor architecture (8085 & ARM Cortex), peripheral hardware protocols (CAN, I2C, UART), Embedded C, Linux package builds, and Python-based camera solutions on STM32 and Raspberry Pi.',
    highlights: [
      { icon: 'bi-cpu-fill', title: 'Silicon to System', desc: 'From 8085 & ARM Cortex architecture to real STM32 & Raspberry Pi hardware.' },
      { icon: 'bi-car-front-fill', title: 'Automotive & High-Speed', desc: 'In-depth CAN Bus module, SPI, Timers, and interrupt programming.' },
      { icon: 'bi-terminal-fill', title: 'Embedded C & Linux', desc: 'Cross-compilation, embedded C registers, and Raspberry Pi Linux builds.' },
      { icon: 'bi-camera-video-fill', title: 'Vision & Python', desc: 'Python hardware programming for GPIO/UART and camera computer vision.' }
    ],
    theoryModules: [
      { title: 'Basics of Embedded Systems', hours: '3 Hr', desc: 'Core architecture, market segments, embedded system constraints, and engineering workflows.' },
      { title: 'Use Cases Briefing', hours: '2 Hr', desc: 'Industrial end-use cases across defense, automotive, medical, and smart infrastructure.' },
      { title: '8085 Processor Basics', hours: '3 Hr', desc: 'Microprocessor fundamentals, ALU, registers, timing diagrams, and assembly concepts.' },
      { title: 'Basics of ARM Cortex Processor', hours: '3 Hr', desc: 'ARM architecture, 32-bit registers, instruction pipeline, NVIC, and memory mapping.' },
      { title: 'Binary → Hex → Decimal Conversions', hours: '2 Hr', desc: 'Bitwise operations, masks, register configurations, and numeric representations.' },
      { title: 'Basics of Microcontroller', hours: '4 Hr', desc: 'Core microcontroller internals, memory (Flash/RAM), clock trees, and reset circuitry.' },
      { title: 'Embedded C Programming', hours: '4 Hr', desc: 'Pointers, bit-manipulation, volatile keyword, hardware abstraction, and register-level drivers.' },
      { title: 'Basics of SoC / Raspberry Pi', hours: '1 Hr', desc: 'System-on-Chip architecture, GPU/CPU interconnects, and embedded Linux foundations.' },
      { title: 'Deep Architecture of I2C, Timers, GPIO, UART', hours: '6 Hr', desc: 'Exhaustive protocol deep-dive, baud rates, framing, pull-up sizing, prescalers, and PWM generation.' },
      { title: 'High Speed: CAN Module', hours: '2 Hr', desc: 'Controller Area Network frame format, differential signaling, arbitration, and automotive standards.' }
    ],
    practicalSessions: [
      {
        platform: 'STM32 Microcontroller Practical Sessions',
        items: [
          { title: 'Use Cases: I2C, Timers, GPIO & UART', hours: '6 Hr', desc: 'Hands-on peripheral bring-up, sensor interfacing, timer delays, and serial communication.' },
          { title: 'SPI & CAN Communication', hours: '3 Hr', desc: 'Board-to-board high-speed communication and automotive CAN packet transmission.' },
          { title: 'Hands-on Learning with HW and SW Flow', hours: '2 Hr', desc: 'Complete embedded build cycle: toolchain configuration, flashing, and step-through debugging.' }
        ]
      },
      {
        platform: 'Raspberry Pi Practical Sessions',
        items: [
          { title: 'Linux Package Builds', hours: '3 Hr', desc: 'Building custom Linux packages, shell environment setup, and driver loading on Raspberry Pi OS.' },
          { title: 'GPIO & UART Example Using Python', hours: '3 Hr', desc: 'Python peripheral access, RPi.GPIO scripts, and serial bridge communication with STM32.' },
          { title: 'Python-Based Camera Solution', hours: '3 Hr', desc: 'Interfacing camera modules, frame capture pipelines, and image processing automation.' }
        ]
      }
    ],
    outcome: 'Develop broad embedded/IoT practical exposure and confidence for hardware-oriented product development and industry opportunities in tier-1 tech & defense organizations.',
    participants: 'Students and graduates from ECE • EEE • CSE/IoT • Mechanical Automation & practicing engineers.',
    prerequisites: 'Familiarity with C & Python Programming.',
    trainer: 'Vijay Veera (28+ years industrial experience — Qualcomm, Xilinx, Broadcom & Texas Instruments).'
  },
  {
    id: 'program-2',
    slug: 'iot-cloud-embedded',
    number: '02',
    title: 'IoT Cloud based Embedded Systems',
    badge: 'IOT & CLOUD ARCHITECTURE',
    subtitle: 'Connect Silicon to the Cloud: Microcontrollers, Wireless Protocols & Cloud Pipelines',
    duration: '17 Hours',
    durationHours: 17,
    mode: 'Hybrid (Online + Lab)',
    level: 'Beginner to Intermediate',
    certification: 'MicroSysLogic Certified',
    image: '/assets/img/training/iot_training.jpg',
    hardware: 'STM32 & ESP32',
    hardwareList: ['STM32 ARM Cortex', 'ESP32 Wi-Fi/BLE', 'Cloud MQTT Broker', 'I2C/GPIO Sensors'],
    theoryHours: '11 Hours',
    practicalHours: '6 Hours',
    summary: 'A fast-track 17-hour immersion connecting STM32 edge microcontrollers and ESP32 wireless nodes to cloud platforms using MQTT and Python device-to-cloud protocols.',
    highlights: [
      { icon: 'bi-cloud-arrow-up-fill', title: 'Device-to-Cloud', desc: 'Bridge physical hardware sensors to cloud brokers using MQTT protocol.' },
      { icon: 'bi-wifi', title: 'ESP32 Wireless', desc: 'Wi-Fi connectivity, wireless stack initialization, and payload transmission.' },
      { icon: 'bi-cpu-fill', title: 'STM32 ARM Core', desc: '5 hours dedicated to STM32 architecture, blocks, interrupts, and peripherals.' },
      { icon: 'bi-filetype-py', title: 'Python Cloud Client', desc: 'Script device-to-cloud telemetry, data formatting, and cloud dashboard feeds.' }
    ],
    theoryModules: [
      { title: 'Basics of Embedded Systems', hours: '1 Hr', desc: 'Introduction to embedded hardware, firmware life cycle, and IoT system layers.' },
      { title: 'Processor Basics', hours: '1 Hr', desc: 'Core CPU operation, instruction cycle, register banks, and clock distribution.' },
      { title: 'STM32 Microcontroller Architecture', hours: '5 Hr', desc: 'ARM fundamentals, hardware architecture blocks, memory & interrupts, UART, Timers, GPIO & I2C peripherals.' },
      { title: 'Basics of Wireless with ESP32 Microcontroller', hours: '1 Hr', desc: 'ESP32 hardware internals, dual-core architecture, Wi-Fi radio basics, and operating modes.' },
      { title: 'Embedded C Programming', hours: '2 Hr', desc: 'C concepts applied to microcontroller registers, bit-banding, and sensor driver logic.' },
      { title: 'MQTT Protocol', hours: '1 Hr', desc: 'Publish-subscribe messaging, topics, QoS levels, keep-alive packets, and IoT payload structure.' }
    ],
    practicalSessions: [
      {
        platform: 'Hands-on Sessions on STM32 & ESP32 (6 Hr)',
        items: [
          { title: 'Required Tools Installation & IDE Setup', hours: '1 Hr', desc: 'STM32CubeIDE / Keil configuration, compiler toolchain, and board communication setup.' },
          { title: 'C-Based Use Cases Using STM32 (I2C, Timers, GPIO & UART)', hours: '3 Hr', desc: 'Direct hands-on code development for I2C sensor reading, timer interrupts, and UART logging.' },
          { title: 'Python Programming for Device-to-Cloud Communication Protocol', hours: '3 Hr', desc: 'Cloud configuration and key concepts; hardware project creation and tool-assisted HW configuration; software modifications, build, testing, and end-to-end software flow explanation.' }
        ]
      }
    ],
    outcome: 'Build confidence to independently develop IoT products with hardware and prepare for high-growth IoT-sector opportunities.',
    participants: 'Students and engineers from ECE • EEE • CSE/IoT • Mechanical Automation.',
    prerequisites: 'Familiarity with C Programming.',
    trainer: 'Vijay Veera (28+ years industrial experience — Qualcomm, Xilinx, Broadcom & Texas Instruments).'
  },
  {
    id: 'program-3',
    slug: 'wireless-embedded-systems',
    number: '03',
    title: 'Wireless Embedded Systems',
    badge: 'DEFENSE & INDUSTRIAL RF',
    subtitle: 'Off-Grid Device-to-Device Wireless Networks with Zigbee, STM32 & ESP32',
    duration: '20 Hours',
    durationHours: 20,
    mode: 'Hybrid (Online + Lab)',
    level: 'Intermediate',
    certification: 'MicroSysLogic Certified',
    image: '/assets/img/training/wireless_training.jpg',
    hardware: 'STM32 & ESP32 (with Zigbee)',
    hardwareList: ['STM32 ARM Cortex', 'ESP32 Controller', 'Zigbee RF Module', 'Hardware Interconnects'],
    theoryHours: '12 Hours',
    practicalHours: '8 Hours',
    summary: 'Master off-grid device-to-device RF wireless systems using STM32, ESP32, and Zigbee modules. Build mission-critical wireless systems that communicate without relying on the internet.',
    highlights: [
      { icon: 'bi-broadcast-pin', title: 'Zigbee RF Protocols', desc: '2 hours dedicated to Zigbee wireless mesh, point-to-point, and coordinator topologies.' },
      { icon: 'bi-hdd-network-fill', title: 'Internet-Free Comm.', desc: 'Realize secure device-to-device communication resilient against network outages.' },
      { icon: 'bi-cpu', title: 'STM32 to ESP32 Bridge', desc: 'Multi-MCU communication across UART/SPI for modular wireless product design.' },
      { icon: 'bi-shield-check', title: 'Defense & Industrial', desc: 'Protocols and architectures utilized in tactical and harsh industrial settings.' }
    ],
    theoryModules: [
      { title: 'Basics of Embedded Systems', hours: '1 Hr', desc: 'Embedded systems landscape, hardware-software partitioning, and wireless system constraints.' },
      { title: 'Processor Basics', hours: '1 Hr', desc: 'CPU pipeline, data buses, memory addressing modes, and peripheral interfacing.' },
      { title: 'STM32 Microcontroller Architecture', hours: '5 Hr', desc: 'ARM fundamentals, HW architecture, blocks, memory & interrupts, UART, Timers, GPIO & I2C peripherals.' },
      { title: 'Embedded C Programming', hours: '2 Hr', desc: 'Embedded C for communication buffers, circular queues, state machines, and register access.' },
      { title: 'Wireless Module: Zigbee Communication', hours: '2 Hr', desc: 'Zigbee 802.15.4 standard, frequency bands, network coordinator/router/end device, and packet framing.' },
      { title: 'ESP32 Controller', hours: '1 Hr', desc: 'ESP32 architecture, GPIO multiplexing, hardware timers, and wireless peripheral subsystems.' }
    ],
    practicalSessions: [
      {
        platform: 'Hands-on Sessions on STM32 & ESP32 (8 Hr)',
        items: [
          { title: 'Required Tools Installation', hours: '1 Hr', desc: 'Toolchain bring-up, flashing utilities, and wireless packet monitoring software setup.' },
          { title: 'C-Based Use Cases Using STM32', hours: '3 Hr', desc: 'Peripheral bring-up: I2C sensor reads, timer delays, GPIO toggling, and serial telemetry.' },
          { title: 'Communication Between STM32 and ESP32', hours: '1 Hr', desc: 'Inter-processor serial communication, payload serialization, and handshake verification.' },
          { title: 'Use Case: Device-to-Device Communication Without Internet', hours: '3 Hr', desc: 'Zigbee wireless hardware implementation, wireless software flow explanation, and complete top-to-bottom software flow for a live working example.' }
        ]
      }
    ],
    outcome: 'Build confidence to independently develop wireless products with hardware and prepare for IoT, Defense & Wireless opportunities.',
    participants: 'Students from ECE • EEE • CSE/IoT • Mechanical Automation.',
    prerequisites: 'Familiarity with C Programming.',
    trainer: 'Vijay Veera (28+ years industrial experience — Qualcomm, Xilinx, Broadcom & Texas Instruments).'
  },
  {
    id: 'program-4',
    slug: 'freertos-embedded-systems',
    number: '04',
    title: 'FreeRTOS based Embedded Systems',
    badge: 'REAL-TIME OPERATING SYSTEMS',
    subtitle: 'Multitasking, Preemption, Task Scheduling & Inter-Process Communication on ARM',
    duration: '20 Hours',
    durationHours: 20,
    mode: 'Hybrid (Online + Lab)',
    level: 'Intermediate to Advanced',
    certification: 'MicroSysLogic Certified',
    image: '/assets/img/training/freertos_training.jpg',
    hardware: 'STM32 & ESP32',
    hardwareList: ['STM32 ARM Cortex-M', 'ESP32 Dual-Core', 'Logic Analyzer', 'Debug JTAG/SWD'],
    theoryHours: '12 Hours',
    practicalHours: '8 Hours',
    summary: 'Dive deep into Real-Time Operating Systems. Learn how commercial microcontrollers manage concurrent tasks, priority scheduling, queues, and mutexes with FreeRTOS on STM32 hardware.',
    highlights: [
      { icon: 'bi-diagram-3-fill', title: 'FreeRTOS Kernel', desc: '4 hours in-depth on RTOS internals: task control blocks, scheduler ticks, and idle tasks.' },
      { icon: 'bi-sort-numeric-up-alt', title: 'Task Scheduling', desc: 'Preemptive vs cooperative scheduling, priority inheritance, and context switching.' },
      { icon: 'bi-arrow-left-right', title: 'IPC & Synchronization', desc: 'Message queues, binary & counting semaphores, mutexes, and event groups.' },
      { icon: 'bi-speedometer2', title: 'Deterministic Timing', desc: 'Design hard real-time systems for automotive and industrial safety critical tasks.' }
    ],
    theoryModules: [
      { title: 'Basics of Embedded Systems', hours: '1 Hr', desc: 'Evolution from bare-metal super-loops to preemptive real-time operating systems.' },
      { title: 'Processor Basics', hours: '1 Hr', desc: 'CPU context, stack pointers (MSP/PSP), PendSV, and SysTick interrupts in ARM Cortex.' },
      { title: 'STM32 Microcontroller Architecture', hours: '5 Hr', desc: 'ARM fundamentals, HW architecture, blocks, memory & interrupts, UART, Timers, GPIO & I2C peripherals.' },
      { title: 'Embedded C Programming', hours: '2 Hr', desc: 'Reentrancy, thread safety, critical sections, volatile memory, and memory layout.' },
      { title: 'RealTime OS Fundamentals', hours: '4 Hr', desc: 'Kernel architecture, RTOS vs General OS, task lifecycle, time slicing, and memory management algorithms.' }
    ],
    practicalSessions: [
      {
        platform: 'Hands-on Sessions on STM32 & ESP32 (8 Hr)',
        items: [
          { title: 'Required Tools Installation', hours: '1 Hr', desc: 'IDE setup, FreeRTOS source integration, and RTOS-aware debugging tool configuration.' },
          { title: 'C-Based Use Cases Using STM32', hours: '3 Hr', desc: 'Driver configuration for I2C, Timers, GPIO & UART in a thread-safe environment.' },
          { title: 'FreeRTOS Use Cases & Hands-on Implementation', hours: '4 Hr', desc: 'Practical lab covering OS concepts, task creation & scheduling, dynamic priority changes, and Inter-Process Communication (IPC): task synchronization and message queues.' }
        ]
      }
    ],
    outcome: 'Build confidence to independently develop real-time multitasking firmware with FreeRTOS, queues, and task scheduling for IoT, Defense & automotive platforms.',
    participants: 'Students from ECE • EEE • CSE/IoT • Mechanical Automation.',
    prerequisites: 'Familiarity with C Programming.',
    trainer: 'Vijay Veera (28+ years industrial experience — Qualcomm, Xilinx, Broadcom & Texas Instruments).'
  },
  {
    id: 'program-5',
    slug: 'raspberry-pi-python-camera',
    number: '05',
    title: 'Raspberry Pi (SoC) with Python & Camera Systems',
    badge: 'SOC & COMPUTER VISION',
    subtitle: 'Embedded Linux, Sensor Interfacing & Camera Computer Vision on Raspberry Pi',
    duration: '20 Hours',
    durationHours: 20,
    mode: 'Hybrid (Online + Lab)',
    level: 'Beginner to Intermediate',
    certification: 'MicroSysLogic Certified',
    image: '/assets/img/training/raspberrypi_camera_training.jpg',
    hardware: 'STM32 & Raspberry Pi',
    hardwareList: ['Raspberry Pi (SoC)', 'OmniVision Camera Sensor', 'STM32 Board', 'I2C/GPIO Modules'],
    theoryHours: '10 Hours',
    practicalHours: '10 Hours',
    summary: 'A balanced 20-hour program spanning System-on-Chip (SoC) architecture, Linux package builds, Python hardware interfacing, and camera sensor pipelines for smart edge vision solutions.',
    highlights: [
      { icon: 'bi-camera-reels-fill', title: 'OV Camera Sensors', desc: '2 hours on OmniVision image sensor architecture, MIPI-CSI interface, and Bayer formats.' },
      { icon: 'bi-ubuntu', title: 'Linux Package Builds', desc: '3 hours compiling, building, and deploying Linux software packages on Raspberry Pi OS.' },
      { icon: 'bi-filetype-py', title: 'Python Hardware APIs', desc: 'Direct GPIO, I2C, and UART serial communication through Python libraries.' },
      { icon: 'bi-motherboard-fill', title: 'SoC Architecture', desc: 'Demystifying System-on-Chip memory, bus arbiters, and high-speed video pipelines.' }
    ],
    theoryModules: [
      { title: 'Basics of Embedded Systems', hours: '1 Hr', desc: 'Edge processing systems, SoC revolution, and Linux-based embedded appliances.' },
      { title: 'Basics of ARM Processor', hours: '1 Hr', desc: 'ARM application cores (Cortex-A series), multi-core computing, and memory hierarchies.' },
      { title: 'Basics of Microcontroller', hours: '1 Hr', desc: 'Comparison between microcontrollers (MCU) and microprocessors/SoCs (MPU).' },
      { title: 'Basics of SoC / Raspberry Pi', hours: '1 Hr', desc: 'Broadcom SoC blocks, GPU video core, clock tree, and bootloader flow.' },
      { title: 'Peripherals: I2C, GPIO & UART', hours: '2 Hr', desc: 'Electrical characteristics, kernel device drivers, pin multiplexing, and pull-up configuration.' },
      { title: 'OV Camera Sensors Understanding', hours: '2 Hr', desc: 'OmniVision sensor array, pixel clock, frame sync, exposure control, and video interfaces.' },
      { title: 'Embedded C Programming', hours: '2 Hr', desc: 'Low-level Linux C programming, system calls, and device file manipulation.' }
    ],
    practicalSessions: [
      {
        platform: 'Hands-on Linux, Python & Camera (10 Hr)',
        items: [
          { title: 'Linux Package Builds', hours: '3 Hr', desc: 'Package dependencies, compilation flags, library linking, and automated system service creation.' },
          { title: 'GPIO, I2C & UART Example Using Python', hours: '3 Hr', desc: 'Developing Python control scripts for digital I/O, I2C sensor querying, and UART serial bridge.' },
          { title: 'Python-Based Camera Solution', hours: '2 Hr', desc: 'Setting up video stream capture, snapshot processing, resolution scaling, and sensor tuning.' },
          { title: 'Hands-on Implementation and Software Flow', hours: '2 Hr', desc: 'End-to-end integration: sensor trigger → image capture → edge processing → serial output.' }
        ]
      }
    ],
    outcome: 'Build confidence to develop Raspberry Pi/Python hardware solutions and prepare for opportunities across IoT, Defense & related sectors.',
    participants: 'Students from ECE • EEE • CSE/IoT • Mechanical Automation.',
    prerequisites: 'Familiarity with Python Programming.',
    trainer: 'Vijay Veera (28+ years industrial experience — Qualcomm, Xilinx, Broadcom & Texas Instruments).'
  },
  {
    id: 'program-6',
    slug: 'fpga-zynq-platform',
    number: '06',
    title: 'FPGA Training on Zynq Platform',
    badge: 'ADVANCED HARDWARE & FPGA',
    subtitle: 'AMD Xilinx Zynq-7000 PS-PL Co-Design, Verilog RTL, Vivado & Vitis Toolchains',
    duration: '20 Hours',
    durationHours: 20,
    mode: 'Hybrid (Online + Lab)',
    level: 'Advanced',
    certification: 'MicroSysLogic Certified',
    image: '/assets/img/training/fpga_zynq_training.jpg',
    hardware: 'Zynq-7000 Development Board',
    hardwareList: ['AMD Xilinx Zynq-7000 Board', 'Vivado Design Suite', 'Vitis Unified Platform', 'Integrated Logic Analyzer (ILA)'],
    theoryHours: '12 Hours',
    practicalHours: '8 Hours',
    summary: 'High-performance FPGA & SoC co-design on AMD Xilinx Zynq-7000 combining Verilog RTL, Vivado & Vitis toolchains, AXI interconnect, and dual ARM Cortex cores.',
    highlights: [
      { icon: 'bi-motherboard', title: 'Zynq-7000 Architecture', desc: 'ARM Processing System (PS) and Programmable Logic (PL) tightly coupled via AXI buses.' },
      { icon: 'bi-code-slash', title: 'Verilog RTL Design', desc: '4 hours on combinational & sequential digital circuits, counters, and finite state machines.' },
      { icon: 'bi-gear-wide-connected', title: 'Vivado & Vitis Flow', desc: 'Simulation, synthesis, place & route, timing constraints, and bare-metal C software.' },
      { icon: 'bi-bug-fill', title: 'Hardware Debug (ILA)', desc: 'Real-time internal FPGA signal probing using Vivado Integrated Logic Analyzer cores.' }
    ],
    theoryModules: [
      { title: 'FPGA Fundamentals', hours: '2 Hr', desc: 'Digital logic, Look-Up Tables (LUTs), flip-flops, Block RAM (BRAM), and DSP resources.' },
      { title: 'Zynq-7000 Architecture', hours: '2 Hr', desc: 'ARM Processing System (PS), Programmable Logic (PL), and PS-PL high-speed interfaces.' },
      { title: 'Verilog RTL Design', hours: '4 Hr', desc: 'Combinational and sequential logic, RTL coding styles, counters, and finite state machines (FSM).' },
      { title: 'Vivado Design Flow', hours: '2 Hr', desc: 'Simulation, synthesis, implementation, timing constraints (XDC), and bitstream generation.' },
      { title: 'PS-PL and AXI Basics', hours: '2 Hr', desc: 'Vivado IP Integrator, AXI4-Lite, AXI GPIO, and memory-mapped register access across PS-PL.' }
    ],
    practicalSessions: [
      {
        platform: 'Hands-on Sessions on Zynq-7000 (8 Hr)',
        items: [
          { title: 'Tool Setup and Board Bring-up', hours: '1 Hr', desc: 'Vivado, Vitis unified platform, USB-JTAG drivers, and Zynq board power-on familiarization.' },
          { title: 'RTL Simulation and Implementation', hours: '2 Hr', desc: 'Verilog counter, writing testbenches, behavioral simulation, and programming FPGA bitstream.' },
          { title: 'PS-PL Block Design', hours: '2 Hr', desc: 'Creating Zynq PS block, AXI GPIO IP, clock tree configuration, and reset connection routing.' },
          { title: 'Vitis Embedded C', hours: '1 Hr', desc: 'Bare-metal GPIO control, register writes, UART serial output, and step-by-step JTAG debugging.' },
          { title: 'Integrated Project and Debug', hours: '2 Hr', desc: 'Processor-controlled LEDs, hardware switch inputs, and live hardware signal capture using ILA.' }
        ]
      }
    ],
    outcome: 'Build, configure, and debug a working Zynq PS-PL hardware-software system with custom RTL and embedded C drivers.',
    participants: 'Engineering students and corporate engineers from ECE • EEE • CSE/IoT • VLSI • Mechanical Automation.',
    prerequisites: 'Basic digital electronics and C programming.',
    trainer: 'Vijay Veera, 28+ years of industry experience (Qualcomm, Xilinx, Broadcom & Texas Instruments).'
  }
];

export const TRAINING_DIFFERENTIATORS = [
  {
    icon: 'bi-shield-check',
    title: 'Product Organization',
    desc: 'MicroSysLogic develops real products for Defense. We bring product engineering experience directly to advanced embedded programs for corporates and colleges.'
  },
  {
    icon: 'bi-motherboard-fill',
    title: 'Customized Training Boards',
    desc: 'Our hardware boards and laboratory exercises are customized specifically for the learning objectives rather than generic commercial evaluation boards.'
  },
  {
    icon: 'bi-tools',
    title: 'Industrial Expertise',
    desc: 'Participants learn battle-tested methods for hardware bring-up, firmware development, system integration, and multi-protocol debugging.'
  },
  {
    icon: 'bi-briefcase-fill',
    title: 'Internships at MicroSysLogic',
    desc: 'Top-performing students gain valuable internship opportunities at MicroSysLogic to apply concepts on live enterprise and defense products.'
  },
  {
    icon: 'bi-award-fill',
    title: '28 Years Industry Veteran',
    desc: 'Led by Vijay Veera with 28+ years of tier-1 industrial engineering experience across Qualcomm, Xilinx, Broadcom, and Texas Instruments.'
  },
  {
    icon: 'bi-headset',
    title: 'Continued Support for Students',
    desc: 'Students receive ongoing technical guidance and advisory support to develop their own working end-product prototypes after program completion.'
  },
  {
    icon: 'bi-mortarboard-fill',
    title: 'College & Corporate Advisory',
    desc: 'We partner with academic institutions to align curriculum with current industry needs and support collaborative R&D projects.'
  }
];

export const TRAINER_CONTACT = {
  name: 'Vijay Veera',
  title: 'Lead Industry Architect & Technical Director',
  experience: '28+ Years Industrial Experience',
  companies: ['Qualcomm', 'Xilinx', 'Broadcom', 'Texas Instruments'],
  phone: '+91 80081 66724',
  phoneRaw: '8008166724',
  email: 'vijayv@microsyslogic.com',
  website: 'www.microsyslogic.com'
};
