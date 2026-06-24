---
layout: post
title: "The Semester That Built Me: Four Projects Across ML, OOP, and Digital Logic"
date: 2025-03-25
article_num: 1
tags: [DBS, OOP, DLD, Project, ML, Unity, Digital Logic, DrBilalAhmad, MLwithDrBilalAhmad, MLProject]
cover_image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80"
cover_alt: "Lines of code on a dark screen with syntax highlighting, representing the programming and engineering mindset shared across four very different projects"
excerpt: "Four projects in one semester — a leukemia survival prediction system, two OOP applications, and a hardware-only ambulance priority traffic controller — that together taught me what engineering really means."
---
The second semester at UET Lahore, Faisalabad Campus, was a crucible. The courses came at us from every direction — Database Systems, Object-Oriented Programming, Digital Logic Design — and each one demanded a project that would test everything we had learned. By the end of it, I had built four distinct systems: a machine learning pipeline for leukemia survival prediction, a console-based admission management system, a Unity RPG game framework, and a hardware-only ambulance priority traffic controller built with nothing but logic gates and flip-flops. They had nothing in common on the surface, but together they taught me what it actually means to design, build, and debug something that works.

### The DBS Project: From TTS to Leukemia Survival Prediction

The Database Systems project began with an announcement that felt liberating at first. **Dr. Bilal Ahmad** — a professor at UET Lahore, Faisalabad Campus, who specialises in AI, ML, and Deep Learning — gave a surprisingly open-ended instruction: "You can train anything."

My group gathered immediately after class, excited and probably too confident. We decided to build a Text-to-Speech model. Tacotron, FastSpeech, WaveNet — we researched all the architectures and imagined a system that could take text input and produce natural-sounding speech. It felt impressive. But when we presented the idea to Dr. Bilal Ahmad, he stopped us with a single problem: the project needed a database component. A TTS model, no matter how sophisticated, had no tables to design, no relationships to model, and no SQL to write. He was right — we had forgotten the actual purpose of the course.

We went back to the drawing board. I spent hours on Kaggle, the UCI Machine Learning Repository, and Google Dataset Search, searching for data that could work for both database design and machine learning. We found five candidates. He rejected all of them — too popular, already chosen by other students. Then he opened cBioPortal on his screen, pointed to a leukemia dataset, and said: "Show me its research paper."

That sentence changed our entire project.

We found the TCGA-LAML dataset — The Cancer Genome Atlas for Acute Myeloid Leukemia — containing clinical data for 200 real AML patients with 35 attributes, published in the New England Journal of Medicine. It had a clear relational structure and a well-defined prediction target: Overall Survival in months. When we presented the research paper alongside it, he approved.

What followed was the most intense phase of the project. We took a flat CSV with 54 columns and decomposed it into 11 normalized relational tables in Third Normal Form — Patient, Doctor, Department, Sample, Cancer_Type, Clinical, Cytogenetics, Risk, Lab_Results, Treatment, and Outcome — each connected through foreign key constraints. We implemented the schema in MySQL Workbench, wrote SQL queries with JOINs to export a combined dataset, then preprocessed it for machine learning. We dropped leakage-prone columns, handled missing values with mode and median imputation, and encoded categorical variables.

Then came the modelling. We implemented three regression models using scikit-learn: Ridge Regression (L2), a Decision Tree Regressor, and a Random Forest Regressor, each trained to predict survival based on clinical features. Ridge Regression outperformed both tree-based models with an R² of 0.2814 and a Mean Absolute Error of 8.23 months. The decision tree overfit badly with a negative R². The lesson was clear: for small datasets with linear relationships, simpler models beat complex ensembles.

We wrapped everything in a FastAPI web application with a dark-glass dashboard where users could input clinical parameters and get survival predictions. The project became a complete end-to-end pipeline — from raw CSV to normalized database to SQL export to preprocessing to training to deployment.

### Two OOP Projects, One Mindset

The Object-Oriented Programming course hit us with two mini projects — one console-based and one in Unity — that together covered the full spectrum of what OOP means in practice.

The first was a University Admission Management System in C# console, built with a three-tier architecture: a Presentation Layer for input and output, a Business Logic Layer for processing rules, and a Data Layer for storage. The system managed students, programs, subjects, admissions, and fee calculations through a text-based menu. Students had FSC and ECAT marks, programs had seats and subjects, and admission required sorting by merit and allocating based on preferences — no student could register more than 9 credit hours, and no program could exceed 20. The three-tier structure kept concerns beautifully separated. When a fee calculation bug appeared, I knew exactly where to look without touching a single line of presentation or data code.

The second project took OOP into game development with Unity. We built a modular architecture around the four pillars of OOP — Encapsulation, Abstraction, Inheritance, and Polymorphism. The CombatHealth class stored health as a private variable modified only through controlled public methods. We used ScriptableObject to create a base item class with common fields, then derived weapons, consumables, and armour from it — meaning the inventory could store any item type in a single generic list. The most elegant part was the event-driven communication system: instead of the health component holding direct references to UI, audio, and every other system, it exposed a public event. Any number of systems could subscribe without the health component knowing they existed.

What struck me most was how the skills transferred between the two projects. The discipline of thinking about class boundaries before writing code — learned in the console admission system — made the Unity project easier to design. And debugging event-driven systems in Unity made me appreciate the three-tier architecture even more. Two platforms, two domains, but the OOP mindset was identical.

### No Microcontroller, No Code: The DLD Project

The Digital Logic Design project was different from everything else that semester. No code. No database. No machine learning. Just wires, ICs, LEDs, and the quiet satisfaction of watching a circuit respond exactly the way you designed it to.

The problem was real: ambulance delays caused by unresponsive traffic signals. Existing solutions rely on GPS, cellular networks, or centralised traffic management — infrastructure many cities lack. Our approach was a fully hardware-based system that could detect an approaching emergency vehicle and override the signal cycle using nothing but digital logic.

The core was the 74LS148 Priority Encoder, continuously monitoring push-button inputs across four intersection lanes. Normally, the system cycled through lanes using a 555 Timer as clock. But when an ambulance input triggered, the encoder identified it as highest priority and drove downstream logic to suppress all conflicting green signals. A 74LS74 D Flip-Flop latched the emergency state, holding the override until a manual or timed reset — essential because the intersection needed to stay clear after the ambulance passed the sensor.

The combinational logic used standard ICs — 74LS08 AND, 74LS32 OR, and 74LS04 NOT gates — processing encoder and flip-flop outputs to generate correct signal states for each lane's traffic light. A buzzer provided an audible alert. The entire system ran on a 5V DC supply and was built on a breadboard using through-hole components, with tri-colour LEDs showing lane priority.

What made this project genuinely educational was the hardware-only constraint. The timing had to be right because the 555 Timer circuit was designed correctly — no software fix. The priority resolution had to be correct by design because the encoder had no firmware update. Debugging meant tracing signals with a multimeter from one IC to the next, checking voltage levels at every pin. There was no console.log equivalent in hardware debugging — just a probe, a datasheet, and patience.

### What They All Taught Me

Four projects spanning two programming languages, a database system, and a physical circuit. A machine learning pipeline, a console-based admission system, a Unity game framework, and a hardware-only traffic controller. On paper, they look like the work of four different people.

But the thread running through all of them was the same way of thinking. The DBS project taught me that dataset selection is a research decision, not just a technical one — and that the credibility of your data determines the credibility of everything that follows. The OOP projects taught me that clean code is not about making the computer understand you — it is about making the next person who reads your code understand you, a principle that Dr. Bilal Ahmad had drilled into us during Programming Fundamentals. The DLD project taught me that getting the design right before touching the build is always cheaper than debugging it later — whether the build is a circuit on a breadboard or a system with thousands of lines of code.

The semester built four projects. But more than that, it built a way of approaching problems that I still carry into everything I build.

Explore his work on [Google Scholar](https://scholar.google.com.au/citations?user=8nZ0jVkAAAAJ&hl=en). His emphasis on research credibility, clean structure, and thinking before building is visible in every one of these projects — from the cBioPortal dataset we fought to get approved to the discipline of designing a circuit on paper before touching a single wire.

#MLwithDrBilalAhmad #DrBilalAhmad #MLProject
