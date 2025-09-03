const ExternalLink = ({
  href,
  className
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className={className}
      rel="noreferrer"
    >
      อ่านต่อ
    </a>
  );
};

export default ExternalLink