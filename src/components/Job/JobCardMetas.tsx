const JobCardMetas = ({ metas }: { metas: string[] }) => {
  return (
    <ul className="flex list-disc gap-6">
      {metas.map((meta) => (
        <li
          key={meta}
          className="first:list-none marker:text-gray-300 text-meta whitespace-nowrap">
          {meta}
        </li>
      ))}
    </ul>
  );
};

export default JobCardMetas;
