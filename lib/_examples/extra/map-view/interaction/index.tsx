'use client';

import type { MapProps } from 'react-map-gl';
import { useState, useCallback } from 'react';

import { MapWrapper, MapControl } from 'lib/components/map';

import { ControlPanel } from './control-panel';

// ----------------------------------------------------------------------

export function MapInteraction({ ...other }: MapProps) {
  const [settings, setSettings] = useState({
    minZoom: 0,
    maxZoom: 20,
    minPitch: 0,
    maxPitch: 85,
    dragPan: true,
    boxZoom: true,
    keyboard: true,
    touchZoom: true,
    dragRotate: true,
    scrollZoom: true,
    touchPitch: true,
    touchRotate: true,
    doubleClickZoom: true,
    touchZoomRotate: true,
  });

  const updateSettings = useCallback(
    (name: string, value: boolean | number) =>
      setSettings((prevSettings) => ({ ...prevSettings, [name]: value })),
    []
  );

  return (
    <MapWrapper
      {...settings}
      initialViewState={{
        latitude: 37.729,
        longitude: -122.36,
        zoom: 11,
        bearing: 0,
        pitch: 50,
      }}
      {...other}
    >
      <MapControl />

      <ControlPanel settings={settings} onChange={updateSettings} />
    </MapWrapper>
  );
}
