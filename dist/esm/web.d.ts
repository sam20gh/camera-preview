import { WebPlugin } from '@capacitor/core';
import type { CameraPreviewOptions, CameraPreviewPictureOptions, CameraPreviewPlugin, CameraPreviewFlashMode, CameraSampleOptions, CameraOpacityOptions } from './definitions';
export declare class CameraPreviewWeb extends WebPlugin implements CameraPreviewPlugin {
    /**
     *  track which camera is used based on start options
     *  used in capture
     */
    private isBackCamera;
    constructor();
    start(options: CameraPreviewOptions): Promise<void>;
    startRecordVideo(): Promise<void>;
    stopRecordVideo(): Promise<void>;
    stop(): Promise<any>;
    capture(options: CameraPreviewPictureOptions): Promise<any>;
    captureSample(_options: CameraSampleOptions): Promise<any>;
    getSupportedFlashModes(): Promise<{
        result: CameraPreviewFlashMode[];
    }>;
    setFlashMode(_options: {
        flashMode: CameraPreviewFlashMode | string;
    }): Promise<void>;
    flip(): Promise<void>;
    setOpacity(_options: CameraOpacityOptions): Promise<any>;
    isCameraStarted(): Promise<{
        value: boolean;
    }>;
}
