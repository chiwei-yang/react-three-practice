## Summary

使用 CRA + Three.js 建立的基礎 3D 專案練習

## Packages

- React + CRA (TypeScript)
- zustand
- Three.js
- @react-three/fiber
  - 轉換 Imperative 為 JSX (Declarative) 來建立 3D 場景
- @react-three/drei
  - 整合開發元件和 UI 輔助工具

## Starter

- 基本場景建立 (Declarative)

  ```ts
  <Canvas>
  	// 環境光源
  	<ambientLight intensity={1} />
  	// 場景物件們 ...
  </Canvas>
  ```

- 鏡頭設定
