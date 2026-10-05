// Small inline SVG icon set — stroke inherits currentColor.
// Usage: <BoltIcon className="size-5 text-volt" />

function base(props) {
  return {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    ...props,
  };
}

export const BoltIcon = (p) => (
  <svg {...base(p)}>
    <path d="M13 2 4.5 13.5H11L9.5 22 19 10.5h-6.5L13 2z" />
  </svg>
);

export const ShieldIcon = (p) => (
  <svg {...base(p)}>
    <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z" />
    <path d="m9.5 12 1.8 1.8 3.4-3.6" />
  </svg>
);

export const TargetIcon = (p) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export const ChevronDownIcon = (p) => (
  <svg {...base(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const CheckIcon = (p) => (
  <svg {...base(p)}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);

export const ArrowDownIcon = (p) => (
  <svg {...base(p)}>
    <path d="M12 4v16m0 0 6-6m-6 6-6-6" />
  </svg>
);

export const ArrowRightIcon = (p) => (
  <svg {...base(p)}>
    <path d="M4 12h16m0 0-6-6m6 6-6 6" />
  </svg>
);

export const MenuIcon = (p) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p) => (
  <svg {...base(p)}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const SearchIcon = (p) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.8-3.8" />
  </svg>
);

export const StarIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9 2.9-6z" />
  </svg>
);

export const MapPinIcon = (p) => (
  <svg {...base(p)}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const HomeIcon = (p) => (
  <svg {...base(p)}>
    <path d="m3.5 11 8.5-7 8.5 7" />
    <path d="M6 10v10h12V10" />
  </svg>
);

export const RefreshIcon = (p) => (
  <svg {...base(p)}>
    <path d="M20 12a8 8 0 1 1-2.34-5.66L20 8.5" />
    <path d="M20 3.5v5h-5" />
  </svg>
);

export const ExternalLinkIcon = (p) => (
  <svg {...base(p)}>
    <path d="M14 4h6v6" />
    <path d="M20 4 10.5 13.5" />
    <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </svg>
);

export const PhoneIcon = (p) => (
  <svg {...base(p)}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const SparkIcon = (p) => (
  <svg {...base(p)}>
    <path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8M8.4 15.6l-2.8 2.8" />
  </svg>
);

export const GlobeIcon = (p) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.6 2.6 3.9 5.7 3.9 9s-1.3 6.4-3.9 9c-2.6-2.6-3.9-5.7-3.9-9S9.4 5.6 12 3z" />
  </svg>
);

export const MegaphoneIcon = (p) => (
  <svg {...base(p)}>
    <path d="m3 11 14-6v14L3 13v-2z" />
    <path d="M7.5 13.6V16a2.5 2.5 0 0 0 5 0v-2.4" />
  </svg>
);

// Map used by the formula levers
export const leverIcons = {
  bolt: BoltIcon,
  shield: ShieldIcon,
  target: TargetIcon,
};
