---
layout: post
title: "Two OOP Projects, One Mindset: From Console Admissions to a Unity Game Framework"
date: 2025-03-28
article_num: 2
tags: [OOP, C#, Unity, Project, Programming, DrBilalAhmad, MLwithDrBilalAhmad, MLProject]
cover_image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80"
cover_alt: "Lines of code on a dark screen with syntax highlighting"
excerpt: "Two mini projects — a University Admission Management System in C# console and an RPG game framework in Unity — that tested everything I had learned about object-oriented programming."
---

The period after the midterms was project season. Every course seemed to have one, and the deadlines clustered together in a way that forced us to think seriously about time management. Among them were two mini projects for the Object-Oriented Programming course — one console-based and one in Unity — that together covered the full spectrum of what OOP really means in practice.

The first project was a University Admission Management System built entirely in C# as a console application. The requirement was to implement a three-tier architecture: a Presentation Layer that handled all console input and output, a Business Logic Layer that processed the rules, and a Data Layer that managed the storage. The system had to manage students, programs, subjects, admissions, and fee calculations — all through a text-based menu interface.

The domain was immediately relatable. The program had to handle exactly the kind of processes that we as students had experienced firsthand: applying to programs, checking merit lists, getting allocated to a program, registering subjects, and calculating fees. Students had FSC and ECAT marks, programs had seats and subjects, and the admission process required sorting by merit score and allocating based on preferences. There was a constraint system — no student could register more than 9 credit hours, and no program could exceed 20 credit hours for its subjects. The fee department calculated fees based on registered subjects and their per-credit-hour rates.

Building this in a three-tier architecture taught me something that a single-file script never could: the importance of separation of concerns. The Menu class handled navigation without knowing anything about admission logic. The AdmissionManager processed admissions without caring about how data was displayed. The StudentDL class stored and retrieved data without understanding what the data meant. Each layer had one job, and the boundaries between them were strict. When a bug appeared in fee calculation, I knew exactly where to look — the FeeCalculator in the Business Logic Layer — without touching a single line of presentation or data code.

What made the admission project particularly challenging was the amount of edge cases the system had to handle. What happened when a student with no program preferences tried to register subjects? What if a program's seats were all filled but students were still being added to the system? What if a student entered an invalid subject code during registration? Each of these scenarios had to be anticipated and managed gracefully — the system could not crash, and it could not produce incorrect results. The three-tier architecture proved its value here. Each edge case was handled at the appropriate layer: data validation in the Presentation Layer, business rules in the Logic Layer, and state consistency in the Data Layer. Changing how one layer handled its responsibilities never required touching the other two.

The console application also had to handle user navigation fluidly — a menu system where users could go back to the previous screen at any point by typing "b" or "back." This required a custom NavigationBackException that could be thrown from any depth of the input handling and caught at the menu loop level. It was a small detail, but it made the difference between a frustrating command-line experience and one that actually felt usable.

The second project took OOP into a completely different context: game development in Unity. The objective was to design a modular, scalable game architecture using the four pillars of OOP — Encapsulation, Abstraction, Inheritance, and Polymorphism — this time applied to a real-time interactive system rather than a console-based data processor.

The core of the Unity project was a health system built around encapsulation. The CombatHealth class stored the current health as a private variable that could only be modified through controlled public methods. TakeDamage validated the input, clamped the health to a valid range, and triggered death detection as a guaranteed side effect. No external script could bypass this by setting health directly, because the variable simply was not accessible. The SerializeField attribute kept maxHealth editable in the Unity Inspector while preserving encapsulation in code — a practical compromise that game developers use daily.

For data management, we used Unity's ScriptableObject system to create a base item class with common fields like itemID, displayName, and itemRarity. Different item types — weapons, consumables, armor — inherited from this base class and added their own specialized fields. This meant the inventory system could store any item type in a single generic list and treat them uniformly through their shared base class interface. Adding a new item type required creating a new derived class without modifying any existing code.

The most architecturally interesting part was the event-driven communication system. Instead of the health component holding direct references to the UI, the audio manager, and every other system that cared about health changes, it simply exposed a public event and broadcast it when the health changed. Any number of external systems could subscribe to that event without the health component knowing or caring about their existence. This decoupling meant the CombatHealth component could be attached to the player, enemies, and destructible objects without modification — true reusability through polymorphic design.

What struck me most was how the skills transferred between the two projects. The discipline of thinking about class boundaries before writing code — learned in the console admission system — made the Unity project easier to design. And the experience of debugging event-driven systems in Unity made me appreciate the clean separation of the three-tier architecture even more. They were two different languages, two different platforms, two different domains. But the OOP mindset was identical.

The lessons from these two projects, though applied in very different contexts, reinforced the same fundamental principle that **Dr. Bilal Ahmad** had taught in his Programming Fundamentals course: clean code is not about making the computer understand you — it is about making the next person who reads your code understand you. The three-tier architecture of the admission system and the event-driven architecture of the Unity framework both aimed at the same goal: creating code that could be understood, extended, and debugged without requiring the original author to be present.

Connect with him on [Facebook](https://www.facebook.com/drbilalphd/). His emphasis on programming fundamentals — clear structure, meaningful naming, single responsibility — is visible in every well-architected system I have built since.

Two projects, two platforms, two completely different domains. But the OOP principles that made both of them work — encapsulation, abstraction, inheritance, polymorphism — were the same. And the value of writing code that is not just functional but maintainable is a lesson that applies whether you are building a university admission console app or a full-scale game framework.

#MLwithDrBilalAhmad #DrBilalAhmad #MLProject
