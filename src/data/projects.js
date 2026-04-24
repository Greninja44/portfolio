export const projects = [
  {
    id: "PROJ-01",
    name: "Fluid-Keychain",
    summary: "An ESP32-S3 powered interactive RGB matrix keychain that simulates real-time fluid dynamics and renders animations, text, and simple games on an 8×8 WS2812 display. Designed with a portable Li-Ion power system, USB-C charging, and a compact 3D-printed enclosure",
    tech: ["WS2812 8×8 RGB LED Matrix", "C/C++", "USB-C power", "3D printing"],
    status: "Completed",
    link: "https://github.com/Greninja44/fluid_keychain"
  },
  {
    id: "PROJ-02",
    name: "MechaKey",
    summary: "A custom-built 48-key ortholinear mechanical keyboard powered by an Arduino Pro Micro, featuring fully programmable keymaps using QMK firmware. Designed with a custom PCB and a compact 3D-printed/acrylic case for an optimized typing experience.",
    tech: ["ATmega32U4", "PCB", "QMK"],
    status: "Completed",
    link: "https://github.com/Greninja44/Mechakey_k48"
  },
  {
    id: "PROJ-03",
    name: "USB HUB",
    summary: "A custom-designed 4-port USB hub PCB featuring 2× USB-C and 2× USB-A ports, optimized for compact, bus-powered operation. Built with proper signal routing and protection to ensure reliable USB 2.0 data transfer and portability.",
    tech: ["PCB", "ESD", "USB 2.0"],
    status: "Completed",
    link: "https://github.com/GreNinja44/C-HUB"
  },
  {
    id: "PROJ-04",
    name: "Magnus",
    summary: "A 5-DOF robotic arm capable of playing chess with vision-based board state detection and real-time move execution. Integrated with a web interface for remote gameplay, synchronizing digital inputs with precise physical actuation.",
    tech: ["ROS2", "PCB", "Computer vision", "Control systems"],
    status: "Ongoing",
    link: "https://cad.onshape.com/documents/d61a78b19732e537cd7639fa/w/6cdd992657666b9bea785b83/e/a6ec0eaf1af1afce16756884?renderMode=0&uiState=69eb786bed70f0b38f371536"
  },
  {
    id: "PROJ-05",
    name: "Agri-Rover",
    summary: "An autonomous ROS2-based rover that detects and removes weeds using computer vision and targeted actuation. Built with integrated perception, navigation, and control pipelines for real-time field deployment.",
    tech: ["3D Design", "ROS2", "Computer vision"],
    status: "Ongoing",
    link: "https://cad.onshape.com/documents/a81f60dacdc8866435eb85c0/w/855dc20d72ce5b2b3a38261a/e/16d30e1c08ac426e6d77b045?renderMode=0&uiState=69eb78d8ed70f0b38f3715fd"
  },
  {
    id: "PROJ-06",
    name: "GARUDA",
    summary: "Designed a fixed-wing aircraft optimized for high payload capacity and aerodynamic efficiency for SAE DDC 2026. Focused on lightweight balsa construction and structural optimization for improved performance and stability.",
    tech: ["CAD", "CFD", "Avionics"],
    status: "Completed",
    link: "https://cad.onshape.com/documents/5f7320077fa8ab89c8de358c/w/3bd8cdab7f12a016ecdbd1fe/e/c870ac18779adf7ad81e7041?renderMode=0&uiState=69eb79555ac8622e76bcc11c"
  },
  {
    id: "PROJ-07",
    name: "RFID DOOR LOCK",
    summary: "An RFID-based access control system using an Arduino and MFRC522 module to authenticate users via UID. Controls physical access through a servo mechanism with visual and audio feedback.",
    tech: ["SERVO", "MFRC522"],
    status: "Completed",
    link: "https://github.com/GreNinja44/rfid-based-lock"
  },
  {
    id: "PROJ-08",
    name: "Sukhoi-57",
    summary: "A Sukhoi-themed smart PCB business card integrating NFC technology for wireless data sharing. Designed as a compact, functional PCB with aesthetic routing and manufacturable layout.",
    tech: ["NFC", "PCB"],
    status: "Completed",
    link: "https://github.com/Greninja44/NFC_Card"
  },
  {
    id: "PROJ-09",
    name: "Custom Esp32",
    summary: "BA custom ESP32-WROOM-32E development board designed for compact, reliable IoT prototyping with integrated USB-C programming and full GPIO access. Built with optimized power regulation and onboard USB-to-serial interface for seamless deployment.",
    tech: ["PCB"],
    status: "Completed",
    link: "https://github.com/Greninja44/ESP32_Clone"
  },
  {
    id: "PROJ-10",
    name: "Code-Fusion",
    summary: "A fire rescue robot capable of detecting flames using sensors and navigating autonomously with obstacle avoidance. Supports manual control via Bluetooth for remote operation in hazardous environments.",
    tech: ["Control", "Bluetooth", "ESP-CAM", "robotics", "Obstacle detection"],
    status: "Completed",
    link: "https://github.com/Greninja44/Fire-safety-car"
  },
  {
    id: "PROJ-11",
    name: "Smart-Stick",
    summary: "This project uses an ultrasonic sensor (HC-SR04) to measure the distance of an object and triggers a buzzer and LED when the object is too close (within 10 cm). It’s a simple safety distance detection system."

    ,
    tech: ["Ultra-sonic", "Arduino"],
    status: "Completed",
    link: "https://github.com/GreNinja44/smart-blind-stick"
  },
  {
    id: "PROJ-12",
    name: "Safety Monitor",
    summary: "This project uses an ESP32 to monitor safety conditions in real time. It detects gas leaks using a gas sensor module. It also detects fire using a flame sensor. The system continuously reads sensor data. When gas is detected, it alerts through the serial monitor. When flame is detected, it immediately reports danger. It is designed to be simple, low-cost, and effective.",
    tech: ["ESP32", "Gas sensor", "Flame sensor", "IOT"],
    status: "Completed",
    link: "https://github.com/GreNinja44/System_monitor_mpca"
  },
  {
    id: "PROJ-13",
    name: "OverCrowding monitor",
    summary: "This project is a simple Arduino-based system designed to monitor how crowded an enclosed space is while also keeping track of air quality and basic environmental conditions. It combines multiple sensors to give a more reliable understanding of the situation instead of depending on just one input.  ",
    tech: ["Arduino", "Ultrasonic sensor", "MQ-135 sensor", "DHT11 sensor", "IOT"],
    status: "Completed",
    link: "https://github.com/GreNinja44/Overcrowding_Monitor"
  },
  {
    id: "PROJ-14",
    name: "MicroMouse",
    summary: "An autonomous micromouse system designed to navigate and solve unknown mazes using real-time embedded control, sensor fusion, and optimized path-planning algorithms.",
    tech: ["PID", "AI", "Robotics", "Control"],
    status: "Ongoing",
    link: "https://github.com/GreNinja44/MicroMouse"
  },
  {
    id: "PROJ-15",
    name: "Autonomous Egg Dropping Drone",
    summary: "Implemented an autonomous drone using Raspberry Pi 5 and PX4 flight stack. Developed computer vision pipelines for target detection and navigation.Improved mission reliability through sensor integration and control optimization",
    tech: ["Ardupilot", "Mavlink", "Raspberry Pi"],
    status: "Completed",
    link: "https://github.com/Greninja44/sae-addc-drone"
  }
];
