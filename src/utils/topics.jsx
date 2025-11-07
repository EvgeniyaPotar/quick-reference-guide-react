import ComponentMDX from "../content/components.mdx";
import PropsMDX from "../content/props.mdx";
import StateMDX from "../content/state.mdx";
import LifeCircleMDX from "../content/lifeCircle.mdx";
import VirtualDomMDX from "../content/virtualDom.mdx";
import EventsMDX from "../content/events.mdx";
import KeyFragmentRefs from "../content/keyFragmentRefs.mdx";
import MemoMDX from "../content/reactMemo-useMemo.mdx";
import CallbackMDX from "../content/useCallback.mdx";
import ContextMDX from "../content/context.mdx";
import HocMDX from "../content/hoc.mdx";
import RouterMDX from "../content/router.mdx";
import FormsMDX from "../content/forms.mdx";
import StoragesMDX from "../content/storages.mdx";

export const topics = [
  {
    id: 1,
    title: "Components",
    path: "/components",
    content: <ComponentMDX />,
  },
  {
    id: 2,
    title: "Props",
    path: "/props",
    content: <PropsMDX />,
  },
  {
    id: 3,
    title: "State",
    path: "/state",
    content: <StateMDX />,
  },
  {
    id: 4,
    title: "LifeCircle",
    path: "/life-circle",
    content: <LifeCircleMDX />,
  },
  {
    id: 5,
    title: "Virtual DOM",
    path: "/virtual-dom",
    content: <VirtualDomMDX />,
  },
  {
    id: 6,
    title: "Events",
    path: "/events",
    content: <EventsMDX />,
  },
  {
    id: 7,
    title: "key, Fragment, refs",
    path: "/key-fragment-refs",
    content: <KeyFragmentRefs />,
  },
  {
    id: 8,
    title: "React.memo, useMemo",
    path: "/react-mem",
    content: <MemoMDX />,
  },
  {
    id: 9,
    title: "useCallback",
    path: "/use-callback",
    content: <CallbackMDX />,
  },
  {
    id: 10,
    title: "Context",
    path: "/context",
    content: <ContextMDX />,
  },
  {
    id: 11,
    title: "HOC",
    path: "/hoc",
    content: <HocMDX />,
  },
  {
    id: 12,
    title: "Router",
    path: "/router",
    content: <RouterMDX />,
  },
  {
    id: 13,
    title: "Forms",
    path: "/forms",
    content: <FormsMDX />,
  },
  {
    id: 14,
    title: "Storages",
    path: "/storages",
    content: <StoragesMDX />,
  },
];
