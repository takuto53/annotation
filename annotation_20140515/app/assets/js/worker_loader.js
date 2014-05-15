/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */
/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// List of files to include;
var files = [
  '01core.js',
  '02util.js',
  '04canvas.js',
  '05obj.js',
  '06function.js',
  '07charsets.js',
  '08cidmaps.js',
  '09colorspace.js',
  '10crypto.js',
  '11evaluator.js',
  '12fonts.js',
  '13glyphlist.js',
  '14image.js',
  '15metrics.js',
  '16parser.js',
  '17pattern.js',
  '18stream.js',
  '19worker.js',
  '21jpx.js',
  '22jbig2.js',
  //'bidi.js',
  '20jpg.js'
];

// Load all the files.
for (var i = 0; i < files.length; i++) {
  importScripts(files[i]);
}
