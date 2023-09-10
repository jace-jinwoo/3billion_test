interface LeadType {
  size: number;
  color: string;
  rotationAngle?: number;
}

function Lead({ size, color, rotationAngle }: LeadType) {
  return (
    <svg
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={`rotate(${rotationAngle ?? 0})`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071C15.0976 18.3166 15.0976 17.6834 14.7071 17.2929L9.41421 12L14.7071 6.70711C15.0976 6.31658 15.0976 5.68342 14.7071 5.29289Z"
        fill={color}
      />
    </svg>
  );
}

export default Lead;
