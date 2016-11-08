import {GET, Route} from 'at-express';
import {Request, Response} from 'express';
import {Injectable} from 'fluency-injection';

@Injectable
@Route('/galleries')
export class GalleriesRoutes {
  @GET()
  getAll(req: Request, res: Response) {
    res.status(200).send({
      data: [{
        id: '1234-5678-abcdefg',
        type: 'gallery',
        attributes: {name: 'Test'},
        links: {image: {href: 'test'}}
      }]
    });
  }

  @GET('/:galleryId')
  get(req: Request, res: Response) {
    res.status(200).send({
      data: [{
        id: req.params['id'],
        type: 'gallery',
        attributes: {name: 'Test'},
        links: {image: {href: 'test'}}
      }]
    });
  }
}
