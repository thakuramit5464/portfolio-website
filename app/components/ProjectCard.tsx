type Props = {
    title: string;
    description?: string;
    tech: string[];
    liveUrl: string;
    repoUrl: string;
    problem?: string;
    solution?: string;
    impact?: string;
    isRecent?: boolean;
};

export default function ProjectCard({ title, description, tech, liveUrl, repoUrl, problem, solution, impact, isRecent }: Props) {
    return (
        <article className="rounded-lg border border-slate-200 p-5 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors relative">
            {isRecent && (
                <span className="absolute top-4 right-4 text-xs font-medium text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/30 px-2 py-1 rounded">
                    Recent
                </span>
            )}
            <div className="flex items-start justify-between flex-wrap gap-2">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    {description && (
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
                    )}
                </div>
            </div>

            {(problem || solution || impact) && (
                <div className="mt-4 text-sm text-slate-600 dark:text-slate-300 space-y-2">
                    {problem && (
                        <div>
                            <strong className="text-slate-900 dark:text-slate-100">Problem Solved:</strong>
                            <p className="mt-1">{problem}</p>
                        </div>
                    )}
                    {solution && (
                        <div>
                            <strong className="text-slate-900 dark:text-slate-100">Solution:</strong>
                            <p className="mt-1">{solution}</p>
                        </div>
                    )}
                    {impact && (
                        <div>
                            <strong className="text-slate-900 dark:text-slate-100">Impact:</strong>
                            <p className="mt-1">{impact}</p>
                        </div>
                    )}
                </div>
            )}

            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                    {tech.map((t) => (
                        <span key={t} className="rounded-md bg-slate-100 px-2 py-1 text-xs dark:bg-slate-800">{t}</span>
                    ))}
                </div>
            </div>

            <div className="mt-4 flex gap-3 text-sm">
                {liveUrl !== "#" && (
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${title}`}
                        className="text-sky-600 hover:underline dark:text-sky-400 font-medium"
                    >
                        Live Demo
                    </a>
                )}
                {repoUrl !== "#" && (
                    <a
                        href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${title} on GitHub`}
                        className="text-slate-600 hover:underline dark:text-slate-400 font-medium"
                    >
                        GitHub
                    </a>
                )}
            </div>
        </article>
    );
}
