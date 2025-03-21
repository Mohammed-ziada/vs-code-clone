import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
interface Iprops {
  defaultLayout?: number[] | undefined;
  leftPanel?: ReactNode;
  rightPanel?: ReactNode;
  showPanel?: boolean;
}
const ResizablePanel = ({
  defaultLayout = [33, 67],
  rightPanel,
  leftPanel,
  showPanel,
}: Iprops) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };
  return (
    <PanelGroup
      direction="horizontal"
      onLayout={onLayout}
      autoSaveId="condition"
    >
      {showPanel && (
        <Panel defaultSize={defaultLayout[0]} collapsible>
          {leftPanel}
        </Panel>
      )}
      {/* <Panel defaultSize={defaultLayout[0]}>{leftPanel}</Panel> */}
      <PanelResizeHandle className="border-r border-[#ffffff1f]" />
      <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
    </PanelGroup>
  );
};
export default ResizablePanel;
