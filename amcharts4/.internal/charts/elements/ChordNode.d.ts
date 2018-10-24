/**
 * ChordNode module
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { FlowDiagramNode, IFlowDiagramNodeAdapters, IFlowDiagramNodeEvents, IFlowDiagramNodeProperties } from "./FlowDiagramNode";
import { ChordDiagram, ChordDiagramDataItem } from "../types/ChordDiagram";
import { List } from "../../core/utils/List";
import { AxisLabelCircular } from "../axes/AxisLabelCircular";
import { Slice } from "../../core/elements/Slice";
import * as $iter from "../../core/utils/Iterator";
/**
 * ============================================================================
 * REQUISITES
 * ============================================================================
 * @hidden
 */
/**
 * Defines properties for [[ChordNode]].
 */
export interface IChordNodeProperties extends IFlowDiagramNodeProperties {
}
/**
 * Defines events for [[ChordNode]].
 */
export interface IChordNodeEvents extends IFlowDiagramNodeEvents {
}
/**
 * Defines adapters for [[ChordNode]].
 *
 * @see {@link Adapter}
 */
export interface IChordNodeAdapters extends IFlowDiagramNodeAdapters, IChordNodeProperties {
}
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Creates a node in a Chord Diagram.
 *
 * A Chord node is a block with a value, which represents its size on the
 * diagram.
 *
 * Nodes are connected via [[ChordLink]] elements.
 *
 * @see {@link IChordNodeEvents} for a list of available events
 * @see {@link IChordNodeAdapters} for a list of available Adapters
 * @important
 */
export declare class ChordNode extends FlowDiagramNode {
    /**
     * Defines available properties.
     *
     * @type {IChordNodeProperties}
     */
    _properties: IChordNodeProperties;
    /**
     * Defines available adapters.
     *
     * @type {IChordNodeAdapters}
     */
    _adapter: IChordNodeAdapters;
    /**
     * Defines available events.
     *
     * @type {IChordNodeEvents}
     */
    _events: IChordNodeEvents;
    /**
     * A list of data items of the items coming in from another node, one level
     * up.
     *
     * These are what ingoing links are build out of.
     *
     * @type {List<ChordDiagramDataItem>}
     */
    protected _incomingDataItems: List<ChordDiagramDataItem>;
    /**
     * A list of data items of the items going out of the node.
     *
     * These are what outgoing links are build out of.
     *
     * @type {List<ChordDiagramDataItem>}
     */
    protected _outgoingDataItems: List<ChordDiagramDataItem>;
    /**
     * Sorted list of incoming items.
     *
     * @type {Iterator<ChordDiagramDataItem>}
     */
    protected _incomingSorted: $iter.Iterator<ChordDiagramDataItem>;
    /**
     * Sorted list of outgoing items.
     * @type {Iterator<ChordDiagramDataItem>}
     */
    protected _outgoingSorted: $iter.Iterator<ChordDiagramDataItem>;
    /**
     * A chart instance this node is added to.
     *
     * @type {ChordDiagram}
     */
    chart: ChordDiagram;
    /**
     * Defines the type of the [[ChordDiagramDataItem]] used in the class.
     *
     * @type {ChordDiagramDataItem}
     */
    _dataItem: ChordDiagramDataItem;
    /**
     * Slice sprite of a node
     * @type {Slice}
     */
    slice: Slice;
    /**
     * A label element which shows node's name.
     *
     * @type {AxisLabelCircular}
     */
    label: AxisLabelCircular;
    /**
     * @ignore
     */
    nextAngle: number;
    /**
     * @ignore
     */
    trueStartAngle: number;
    /**
     * Constructor
     */
    constructor();
    /**
     * Invalidates all links, attached to this node.
     *
     * @ignore Exclude from docs
     */
    invalidateLinks(): void;
    /**
     * @ignore
     * updates slice start angle so that when we drag a node it would face the center
     */
    protected updateRotation(): void;
    /**
     * Copies properties and labels from another [[ChordNode]].
     *
     * @param {ChordNode}  source  Source node
     */
    copyFrom(source: this): void;
}
