export default function SkillList() {
    const groups = [
        { title: "Frontend", items: ["JavaScript", "React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"] },
        { title: "Backend", items: ["Node.js", "REST APIs", "Express"] },
        { title: "Frameworks", items: ["Next.js", "React"] },
        { title: "Databases", items: ["Firebase", "SQL", "PostgreSQL", "MySQL"] },
        { title: "Tools & Platforms", items: ["GitHub", "Git", "Firebase", "Vercel", "Docker"] },
        { title: "Environments", items: ["Windows", "Linux", "Cross-platform"] },
    ];

    return (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((g) => (
                <div key={g.title} className="rounded-md border border-slate-200 p-4 dark:border-slate-700">
                    <h3 className="font-medium text-base">{g.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {g.items.map((s) => (
                            <span key={s} className="rounded bg-slate-100 px-2 py-1 text-sm dark:bg-slate-800">{s}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
