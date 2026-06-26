---
layout: post
title: "Second Semester, First Day — and Dr. Bilal Already Had Us Building"
date: 2026-02-01
semester: 2
article_num: 10
tags: [DBS, OOP, ECommerce, WordPress, SQL, DrBilalAhmad, MLwithDrBilalAhmad, MLProject]
cover_image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
cover_alt: "Laptop with analytics dashboard and coffee on a wooden desk"
excerpt: "The second semester started with that first-day energy — new subjects, new schedules, new routines. But Dr. Bilal Ahmad walked into DBS on day one and told us we would be building an e-commerce site, ranking it with an LLM, and learning SQL through real project pressure."
---

The first semester ended quietly. No ceremony, no farewells — just the last exam, a slow exhale, and a break that lasted long enough to reset but not long enough to forget. By the time the second semester was about to begin, I had already started thinking about what came next: new subjects, new teachers, new challenges.

The second semester arrived with two core subjects that would define the next few months: Object-Oriented Programming and Database Systems. Both were heavy. Both demanded real project work. But DBS stood out from day one because of who was teaching it.

**Dr. Bilal Ahmad** walked into the first DBS lecture, introduced the course, and then did something that caught everyone off guard: he told us we were going to build an e-commerce website as the central project, and that every SQL query, every table design, every normalization decision we made would feed directly into it. There would be no textbook project, no pre-built dataset, no toy database. We were going to create something real from scratch.

The room went quiet. Then the questions started.

"Which tools do we use?" someone asked.

His answer was direct: "Whatever it takes to get it running."

That was the first lesson of the semester. **Dr. Bilal Ahmad** does not believe in prescribing a toolchain. He gives you a problem and lets you figure out the stack. Some groups would use WordPress for the frontend because it let them focus on the database design. Others would go with raw PHP and MySQL. Some would set up XAMPP or WAMP locally. The choice was ours. The constraint was the database schema.

Our group settled on a stack quickly: WordPress for the site structure, XAMPP to run everything locally, and MySQL for the database. WordPress gave us a working frontend without reinventing the wheel. XAMPP gave us a local server environment where we could test queries, break things, and fix them without affecting anything else. MySQL gave us the real work — the tables, relationships, constraints, and queries that would make the project actually worth building.

OOP ran parallel to DBS, and the two subjects complemented each other in a way I had not expected. In OOP, we were learning about classes, objects, inheritance, and polymorphism — the structural building blocks of software. In DBS, we were learning about tables, relationships, and queries — the data layer that every real application sits on top of. Together, they formed the backend of almost every modern system I could think of. The e-commerce project became the bridge between them: the WordPress frontend handled the presentation, the PHP logic managed the interaction, and the MySQL database stored everything that mattered.

But there was another layer to the project that made it different from any assignment I had done before. Dr. Bilal had decided that every group would rank their e-commerce site using a Large Language Model. The LLM would evaluate our projects based on database design, query efficiency, schema normalization, and the overall structure of the implementation. We were building for a machine evaluator as much as for a human one.

That changed how we approached the work.

Instead of writing queries that just worked, we wrote queries that were optimized. Instead of designing a schema that met the minimum requirements, we designed one that could scale. Every table relationship had to be intentional. Every foreign key had to make sense. The LLM would not care about how much effort we put in — it would care about whether the design was correct, whether the normalization was sound, and whether the SQL could handle real-world complexity.

I remember sitting with my group, debating whether a product review table should store the review text in the same table as the rating or split them across two related tables. That kind of discussion would have been academic in any other course. But knowing that an LLM would evaluate our schema made every decision feel consequential. We were not just learning database design — we were learning that evaluation criteria shape how you build. If the LLM cared about normalization, you optimized for normalization. If it cared about query efficiency, you indexed the right columns. The same principle applies in machine learning: the loss function defines what the model learns.

It was the kind of pressure that could have been discouraging. Instead, it became the reason we took the project seriously from week one.

I spent the first few days setting up the local environment. XAMPP installed without issues. WordPress was running within an hour. But the real work — the database design — took much longer. I sketched entity-relationship diagrams, debated with my group about whether orders should have a separate shipping address table, and re-read the normalization forms until third normal form felt like second nature.

**Dr. Bilal Ahmad** taught DBS the same way he taught Programming Fundamentals — not by handing us answers, but by giving us real constraints and letting us find the solutions. In PF, the constraint had been the build-break-debug loop. In DBS, it was the LLM evaluator. The tool changed, but the philosophy stayed the same: you learn by building something that will be tested, not by memorizing definitions.

That approach is what makes his teaching different from any I have experienced before. He designs courses the way he designs ML training pipelines — the project is the training data, the LLM is the validation set, and the students are the model learning to generalise from real problems instead of memorising synthetic ones. Every failed query, every misplaced foreign key, every normalisation that turned out to be wrong — those are not mistakes. They are training steps.

You can find Dr. Bilal Ahmad on [LinkedIn](https://www.linkedin.com/in/drbilalphd/). His research applies the same philosophy at scale — real data, real problems, real models that have to perform. The DBS project was a small taste of that mindset, but it was enough to show me that learning through project pressure is not just effective — it is addictive.

The second semester had barely started, and I was already staying up late again. Not because I had to, but because I wanted to get the schema right before the LLM got its hands on it.

#MLwithDrBilalAhmad #DrBilalAhmad #MLProject
