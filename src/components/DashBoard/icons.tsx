import React from 'react';

export const DiskIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M6 15h2V9H6v6Zm5 0h2V9h-2v6Zm5 0h2V9h-2v6ZM5 21v-2H4q-.825 0-1.413-.588T2 17V7q0-.825.588-1.413T4 5h1V3h2v2h4V3h2v2h4V3h2v2h1q.825 0 1.413.588T22 7v10q0 .825-.588 1.413T20 19h-1v2h-2v-2h-4v2h-2v-2H7v2H5Z"
      />
    </svg>
  );
};

export const MemoryIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
      viewBox="0 0 36 36"
    >
      <path
        fillRule="evenodd"
        d="M30.86 8.43A2 2 0 0 0 28.94 7H7.06a2 2 0 0 0-1.93 1.47L2.29 20h31.42Z"
        className="clr-i-solid clr-i-solid-path-1"
      />
      <path
        fillRule="evenodd"
        d="M2 22v7a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7Zm28 5h-4v-2h4Z"
        className="clr-i-solid clr-i-solid-path-2"
      />
      <path fill="none" d="M0 0h36v36H0z" />
    </svg>
  );
};

export const CpuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
      viewBox="0 0 20 20"
    >
      <g fillRule="evenodd">
        <path d="M14 6H6v8h8V6Z" />
        <path
          fillRule='evenodd'
          d="M9.25 3V1.75a.75.75 0 0 1 1.5 0V3h1.5V1.75a.75.75 0 0 1 1.5 0V3h.5A2.75 2.75 0 0 1 17 5.75v.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v.5A2.75 2.75 0 0 1 14.25 17h-.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-.5A2.75 2.75 0 0 1 3 14.25v-.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-.5A2.75 2.75 0 0 1 5.75 3h.5V1.75a.75.75 0 0 1 1.5 0V3h1.5ZM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
          clipRule={'evenodd'}
        />
      </g>
    </svg>
  );
};

export const DiskUsageIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 48 48"
    >
      <g fill="none">
        <path
          stroke="currentColor"
          strokeLinejoin='round'
          strokeWidth={4}
          d="M44 29H4v13h40V29Z"
        />
        <path
          fillRule="evenodd"
          d="M35.5 38a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Z"
        />
        <path
          stroke="currentColor"
          strokeLinejoin='round'
          strokeWidth={4}
          d="M4 29L9.038 4.999H39.02l4.98 24"
        />
        <path
          stroke="currentColor"
          strokeLinecap='round'
          strokeWidth={4}
          d="M10 35.5h17"
        />
      </g>
    </svg>
  );
};
