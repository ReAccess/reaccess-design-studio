// src/components/designer/panels/ContainerToolbar.tsx
import { useEditor } from '@craftjs/core';
import { ColorSelection } from './selectors/ColorSelection';
import { DimensionSelection } from './selectors/DimensionSelection';
import { MarginSelection } from './selectors/MarginSelection';
import { PaddingSelection } from './selectors/PaddingSelection';
import { DecorationSelection } from './selectors/DecorationSelection';
import { AlignmentSelection } from './selectors/AlignmentSelection';
import { useSaveWithDebounce } from '../../../hooks/useSaveWithDebounce'; // Adjusted path

export const ContainerToolbar = ({
  node,
  onUpdateNodeProps
}: {
  node: any;
  onUpdateNodeProps: any;
}) => {
  const { query } = useEditor();

  const wrapOnUpdateNodeProps = (originalFn: Function, onUpdateCallback: Function) => {
    return (...args: any[]) => {
      originalFn(...args);
      onUpdateCallback(...args);
    };
  };

  const debounceSave = useSaveWithDebounce(1500);

  const handleUpdate = wrapOnUpdateNodeProps(onUpdateNodeProps, () => {
    const serializedNodes = query.serialize();
    debounceSave(serializedNodes);
  });

  return (
    <div className="p-2 space-y-2 w-full">
      <DimensionSelection node={node} onUpdateNodeProps={handleUpdate} />
      <ColorSelection node={node} onUpdateNodeProps={handleUpdate} />
      <MarginSelection node={node} onUpdateNodeProps={handleUpdate} />
      <PaddingSelection node={node} onUpdateNodeProps={handleUpdate} />
      <DecorationSelection node={node} onUpdateNodeProps={handleUpdate} />
      <AlignmentSelection node={node} onUpdateNodeProps={handleUpdate} />
    </div>
  );
};
